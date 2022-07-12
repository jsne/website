# @jsne/mailer

A Cloudflare worker to pass mailing list sign up requests to Mailchimp.

## Why?

Mailchimp doesn't support custom client-side forms (without significant hacks) due to CORS
issues so we use this worker to process the requests for us and send the response back to
the client.

## Why not a Mailchimp npm lib?

They have tonnes of dependencies and functionality we don't need, we want the footprint
of the worker to be as small as possible.

## Scripts

| Name     | Description                |
| :------- | :------------------------- |
| `start`  | Start the dev server       |
| `deploy` | deploy to live environment |
