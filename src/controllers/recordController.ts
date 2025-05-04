import { prisma } from "@/models/prisma";
import {
  RecordErrorResponse,
  RecordSuccessResponse,
  RecordType,
} from "@/types/recordType";
import { Context } from "elysia";

export const getAllRecords = async (
  user_id: string,
  set: Context["set"]
): Promise<RecordSuccessResponse | RecordErrorResponse> => {
  try {
    const result = await prisma.record.findMany({
      where: { user_id: user_id },
      orderBy: { created_at: "desc" },
    });

    set.status = 200
    return {
      success: true,
      message: `get all records by id ${user_id} successfully!`,
      data: result,
    };
  } catch (error) {
    if (error instanceof Error) {
      set.status = 400
      return {
        success: false,
        message: `get all records by id ${user_id} failed!`,
        errors: error.message,
      };
    } else {
      set.status = 500
      return {
        success: false,
        message: `get all records by id ${user_id} failed!`,
        errors: `unknown error ${error}`,
      };
    }
  }
};

export const createRecord = async ({
  user_id,
  type,
  category,
  amount,
  date,
  note,
}: RecordType) => {
  const result = await prisma.record.create({
    data: {
      user_id,
      type,
      category,
      amount,
      date,
      note,
    },
  });

  return {
    success: true,
    message: `create record successfully!`,
    data: result,
  };
};
