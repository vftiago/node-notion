import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./emojis";

const router = express.Router();

router.get<object, MessageResponse>("/", (_req, res) => {
  res.json({
    message: "API",
  });
});

router.use("/emojis", emojis);

export default router;
