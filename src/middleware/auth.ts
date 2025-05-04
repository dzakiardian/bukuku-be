import { Elysia } from "elysia";
import jwt from "jsonwebtoken";

export const verifyToken = new Elysia().derive(({ request, set }) => {
    const authHeader = request.headers.get("authorization")

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        set.status = 401
        throw new Error("Unauthorized")
    }

    const token = authHeader.split(" ")[1]

    try {
        const JWT_SECRET: string = Bun.env.JWT_SECRET!
        const decoded = jwt.verify(token, JWT_SECRET)

        return {
            user: decoded,
        }
    } catch (error) {
        set.status = 401
        throw new Error("Invalid token")
    }
})
