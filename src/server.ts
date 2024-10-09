import express from "express";

import compression from "compression";
import rateLimit from "express-rate-limit";
import { HttpCode, MAX_REQUESTS_PER_HOUR, MILLISECONDS_IN_HOUR } from "./constants";

interface ServerOptions {
  port: number;
  apiPrefix: string;
}

export class Server {
  private readonly app: express.Application = express();
  private readonly apiPrefix: string;
  private readonly port: number;

  constructor(options: ServerOptions) {
    const { apiPrefix, port } = options;
    this.apiPrefix = apiPrefix;
    this.port = port;
  }

  async start(): Promise<void> {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());
    this.app.use(
      rateLimit({
        max: MAX_REQUESTS_PER_HOUR,
        windowMs: MILLISECONDS_IN_HOUR,
        message: "Too many requests, please try again in one hour",
      }),
    );

    // Test rest api
    this.app.get("/", (_req, res) => {
      return res.status(HttpCode.OK).send({
        message: `Endpoints available at http://localhost:${this.port}/${this.apiPrefix}`,
      });
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }
}
