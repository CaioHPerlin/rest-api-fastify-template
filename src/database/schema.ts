import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    email: text().notNull().unique(),
    username: text().notNull().unique(),
    password: text().notNull(),
});
