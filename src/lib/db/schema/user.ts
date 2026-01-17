import { pgTable, text, boolean, timestamp, uuid, uniqueIndex } from "drizzle-orm/pg-core";

export const user = pgTable(
    "user",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        name: text("name"),
        email: text("email").notNull(),
        emailVerified: boolean("emailVerified").notNull().default(false),
        image: text("image"),
        createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp("updatedAt", { withTimezone: true })
            .notNull()
            .defaultNow()
            .$onUpdate(() => new Date()),
    },
    (t) => ({
        emailUnique: uniqueIndex("user_email_unique").on(t.email),
    })
);
