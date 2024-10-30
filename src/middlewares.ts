import { NextFunction, Request, Response } from "express";

import ErrorResponse from "./interfaces/ErrorResponse";
import { env } from "./env";
import { HttpCode } from "./interfaces/HTTPCode";
import { Environment } from "./interfaces/environment";

export function notFound(req: Request, res: Response, next: NextFunction) {
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);

  res.status(HttpCode.NOT_FOUND);

  next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, _req: Request, res: Response<ErrorResponse>, _next: NextFunction) {
  const statusCode = res.statusCode !== HttpCode.OK ? res.statusCode : HttpCode.INTERNAL_SERVER_ERROR;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: env.NODE_ENV === Environment.Production ? "🥞" : err.stack,
  });
}
