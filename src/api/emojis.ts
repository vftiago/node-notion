import express from "express";

const router = express.Router();

type EmojiResponse = string[];

router.get<object, EmojiResponse>("/", (_req, res) => {
  res.json(["😀", "😳", "🙄"]);
});

export default router;
