/* eslint no-console: 0 */

export interface Env {
  /** @secret */
  MAILCHIMP_API_KEY: string;
  /** @secret */
  MAILCHIMP_LIST_ID: string;
}

interface JsonResponseInit extends Partial<Pick<Response, 'status'>> {
  message: string;
}

/** `Response` with JSON properties automatically applied. */
class JsonResponse extends Response {
  constructor(
    bodyInit: JsonResponseInit,
    { headers, ...maybeInit }: ResponseInit | Response = {},
  ) {
    const jsonBodyInit = JSON.stringify({
      ...bodyInit,
      status: maybeInit.status,
      ok: 'ok' in maybeInit ? maybeInit.ok : true,
    });

    super(jsonBodyInit, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        ...headers,
      },
      ...maybeInit,
    });
  }
}

/** Fetch Mailchimp requests with base url and headers already set. */
const mailchimpFetch = (
  slug: string,
  { body, env, method }: { body: Record<string, unknown>; env: Env; method: string },
) =>
  fetch(`https://us8.api.mailchimp.com/3.0${slug}`, {
    method,
    headers: {
      Authorization: `api_key ${env.MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

/** Create an MD5 hash from a string. */
const generateMd5 = async (target: string) =>
  Array.from(
    new Uint8Array(await crypto.subtle.digest('MD5', new TextEncoder().encode(target))),
  )
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

/** Hosts allowed to talk to the worker. */
const validHosts = ['jsne.co.uk', 'jsne.vercel.app'];

/** Proxy a request from the JSNE website to the Mailchimp mailing list.*/
const mailer = {
  async fetch(request: Request, env: Env /*ctx: ExecutionContext*/): Promise<Response> {
    const { host } = new URL(request.url);

    // Only allow specific domains.
    if (!validHosts.includes(host)) {
      return new JsonResponse({ message: 'invalid referer' }, { ok: false, status: 403 });
    }

    // Only support POST requests.
    if (request.method.toLowerCase() !== 'post') {
      return new JsonResponse({ message: 'invalid request' }, { ok: false, status: 415 });
    }

    // Only support JSON.
    if (!request.headers.get('Content-Type')?.includes('application/json')) {
      return new JsonResponse(
        { message: 'requests must use `application/json` content type' },
        {
          ok: false,
          status: 415,
        },
      );
    }

    const { email, messageSuccess = 'Thanks for joining the mailing list' } =
      await request.json<{ email?: string; messageSuccess: string }>();

    if (!email) {
      return new JsonResponse({ message: 'invalid email' }, { ok: false, status: 400 });
    }

    const subcribeUrl = `/lists/${env.MAILCHIMP_LIST_ID}/members`;

    console.info('attempting to subcribe to mailing list', { subcribeUrl, email });

    try {
      const subscribe = await mailchimpFetch(subcribeUrl, {
        method: 'POST',
        env,
        body: {
          email_address: email,
          status: 'subscribed',
          status_if_new: 'subscribed',
        },
      });

      if (subscribe.ok) {
        console.info('mailing list subscribe ok', subscribe);

        return new JsonResponse({ message: messageSuccess });
      }

      const subscribeJson = await subscribe.json<{ title: string }>();
      const memberExists = subscribeJson.title.toLowerCase().includes('member exists');

      // Mailchimp will return a `400` for members that already exist in the list even
      // if they have unsubscribed so we need to do a put if we think the user already exists.
      if (memberExists) {
        const resubscribeUrl = `${subcribeUrl}/${await generateMd5(email)}`;

        console.info('member already exists, attempting to resubcribe to mailing list', {
          resubscribeUrl,
          email,
        });

        try {
          const resubscribe = await mailchimpFetch(resubscribeUrl, {
            method: 'PUT',
            env,
            body: {
              email_address: email,
              status: 'subscribed',
              status_if_new: 'subscribed',
            },
          });

          if (resubscribe.ok) {
            console.info('mailing list resubscribe ok', resubscribe);

            return new JsonResponse({ message: messageSuccess });
          }

          console.error('mailing list resubscribe not ok', await resubscribe.json());
        } catch (err) {
          console.error('mailing list resubscribe failed', err);
        }
      }

      console.error('subscribe to mailchimp not ok', subscribeJson);

      return new JsonResponse(
        {
          message: 'failed to update mailing list',
        },
        {
          ok: subscribe.ok,
          status: subscribe.status,
        },
      );
    } catch (err) {
      console.error('POSTing to mailchimp failed', err);

      return new JsonResponse(
        { message: 'failed to contact server' },
        {
          ok: false,
          status: 500,
        },
      );
    }
  },
};

export default mailer;
