const MILLISECONDS_IN_SECOND = 1000 as const;
const SECONDS_IN_MINUTE = 60 as const;
const MINUTES_IN_HOUR = 60 as const;

export const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
export const MAX_REQUESTS_PER_HOUR = 100 as const;
