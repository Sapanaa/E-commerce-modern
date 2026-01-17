import { pgTable, text, timestamp, uuid, index } from "drizzle-orm/pg-core";

export const verification = pgTable(
    "verification",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        identifier: text("identifier").notNull(), // e.g. email
        value: text("value").notNull(), // token/code
        expiresAt: timestamp("expiresAt", { withTimezone: true }).notNull(),
        createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp("updatedAt", { withTimezone: true })
            .notNull()
            .defaultNow()
            .$onUpdate(() => new Date()),
    },
    (t) => ({
        identifierIdx: index("verification_identifier_idx").on(t.identifier),
    })
);
