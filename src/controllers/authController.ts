import { prisma } from "@/models/prisma";
import jwt from "jsonwebtoken";

export const login = async (pin: string) => {
    const result = await prisma.user.findFirst({
        where: {
            pin: pin,
        }
    })

    console.log(result !== null ? 'ada' : 'tidak ada')
}