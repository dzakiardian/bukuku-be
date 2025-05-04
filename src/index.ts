import { Elysia } from "elysia";
import { routeIndex } from "./routes/indexRoutes";

const app = new Elysia()
  .use(routeIndex)
  .get("/", () => "Hello Elysia")
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
