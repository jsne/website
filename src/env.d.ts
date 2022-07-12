declare namespace NodeJS {
  /** @WARN These properties should match the ones defined in the `.env` file. */
  export interface ProcessEnv {
    GATSBY_MAPBOX_API_KEY: string;
    GATSBY_MAILCHIMP_SUBSCRIBE_ENDPOINT: string;
  }
}
