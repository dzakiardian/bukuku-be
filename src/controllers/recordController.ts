import { prisma } from "../models/prisma";

type Record = {
    user_id: string;
    type: string;
    category: string;
    amount: number;
    date: Date;
    note: string;
}

export const getAllRecords =  async (user_id: string) => {
    const result = await prisma.record.findMany({
        where: { user_id: user_id },
        orderBy: { created_at: 'desc' }
    })

    return {
        success: true,
        message: `get all records by id ${user_id} successfully!`,
        data: result,
    }
}

export const createRecord = async ({ user_id, type, category, amount, date, note}: Record) => {
    const result = await prisma.record.create({
        data: {
            user_id,
            type,
            category,
            amount,
            date,
            note,
        }
    })

    return {
        success: true,
        message: `create record successfully!`,
        data: result,
    }
}