export type RecordType = {
    user_id: string;
    type: string;
    category: string;
    amount: number;
    date: Date;
    note: string;
}

export type RecordSuccessResponse = {
    success: boolean;
    message: string;
    data: RecordType[];
}

export type RecordErrorResponse = {
    success: boolean;
    message: string;
    errors: string;
}