import { ENV } from "./env";
import { Server } from "./server";

(() => {
  main();
})();

function main(): void {
  const server = new Server({
    apiPrefix: ENV.API_PREFIX,
    port: ENV.PORT,
  });

  void server.start();
}
