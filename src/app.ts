import express from "express";

import compression from "compression";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { notFound, errorHandler } from "./middlewares";
import api from "./api";

import { MAX_REQUESTS_PER_HOUR, MILLISECONDS_IN_HOUR } from "./constants";
import MessageResponse from "./interfaces/MessageResponse";
import { env } from "./env";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(
  rateLimit({
    max: MAX_REQUESTS_PER_HOUR,
    windowMs: MILLISECONDS_IN_HOUR,
    message: "Too many requests, please try again in one hour.",
  }),
);

app.get<object, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.use(env.API_PREFIX, api);

app.use(notFound);
app.use(errorHandler);

export default app;
