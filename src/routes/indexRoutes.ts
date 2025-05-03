import { Elysia } from "elysia";
import { recordRoute } from "./recordRoutes";

export const routeIndex = new Elysia({ prefix: '/api/v1'})
    .use(recordRoute)