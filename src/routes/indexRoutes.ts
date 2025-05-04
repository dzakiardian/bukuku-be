import { Elysia } from "elysia";
import { recordRoute } from "./recordRoutes";
import { authRoutes } from "./authRoutes";

export const routeIndex = new Elysia({ prefix: '/api/v1'})
    .use(recordRoute)
    .use(authRoutes)