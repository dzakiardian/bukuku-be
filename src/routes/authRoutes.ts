import { login } from "@/controllers/authController";
import Elysia, { t } from "elysia";

export const authRoutes = new Elysia({ prefix: '/auth' })
    .post('/login', async ({ body }) => {
        return login(body.pin as string)
    }, {
        body: t.Object({
            pin: t.String()
        })
    })