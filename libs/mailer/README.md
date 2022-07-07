# @jsne/mailer

A Cloudflare worker to pass mailing list sign up requests to Mailchimp.

## Why?

Mailchimp doesn't support custom client-side forms (without signficiant hacks) due to CORS
issues so we use this worker to process the requests for us and send the response back to
the client.

## Scripts

| Name     | Description                |
| :------- | :------------------------- |
| `start`  | Start the dev server       |
| `deploy` | deploy to live environment |
