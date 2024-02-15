
import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: text('title'),
    body: text('body'),
    authorId: integer('author_id').references(() => users.id),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, { fields: [posts.authorId], references: [users.id] }),
}));

export type Post = typeof posts.$inferSelect; // return type when queried
export type NewPost = typeof posts.$inferInsert; // insert type
