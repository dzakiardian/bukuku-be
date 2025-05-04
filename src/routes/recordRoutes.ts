import { Elysia, t } from "elysia";
import { createRecord, getAllRecords } from "../controllers/recordController";


export const recordRoute = new Elysia({ prefix: '/records' })
    .get('/', async ({ query, set }) => {
        return getAllRecords(query.user_id as string, set);
    })
    .post('/', async ({ body }) => {
        return createRecord(body);
    }, {
        body: t.Object({
            user_id: t.String(),
            type: t.Union([t.Literal('pemasukan'), t.Literal('pengeluaran')]),
            category: t.String(),
            amount: t.Number(),
            date: t.Date(),
            note: t.String(),
            // note: t.Optional(t.String())
        })
    })

