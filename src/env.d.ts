declare namespace NodeJS {
  /** @WARN These properties should match the ones defined in the `.env` file. */
  export interface ProcessEnv {
    GATSBY_GOOGLE_MAPS_API_KEY: string;
    /** Whether it is the **LIVE** environment (jsne.co.uk). */
    GATSBY_IS_LIVE: string;
    GATSBY_MAPBOX_API_KEY: string;
  }
}
