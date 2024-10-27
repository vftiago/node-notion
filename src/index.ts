import app from "./app";
import { env } from "./env";

const port = env.PORT;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
