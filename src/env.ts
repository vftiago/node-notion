import { Environment } from "./interfaces/environment";

const DEFAULT_PORT = 3000 as const;
const DEFAULT_API_PREFIX = "/api/v1" as const;
const DEFAULT_NODE_ENV = Environment.Development as const;

export const env = {
  PORT: Number(process.env.PORT ?? DEFAULT_PORT),
  API_PREFIX: process.env.API_PREFIX ?? DEFAULT_API_PREFIX,
  NODE_ENV: process.env.NODE_ENV ?? DEFAULT_NODE_ENV,
};
