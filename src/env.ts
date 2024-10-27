export const env = {
  PORT: Number(process.env.PORT ?? 3000),
  API_PREFIX: process.env.API_PREFIX ?? "api/v1",
  NODE_ENV: process.env.NODE_ENV ?? "development",
};
