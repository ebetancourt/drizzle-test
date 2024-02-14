import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
    email: text('email'),
    password: text('password'),
    role: text('role').$type<'admin' | 'customer'>(),
    createdAt: timestamp('created_at'),
    updatedAt: timestamp('updated_at'),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type
