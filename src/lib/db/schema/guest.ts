import { pgTable, text, timestamp, uuid, uniqueIndex, index } from "drizzle-orm/pg-core";

export const guest = pgTable(
    "guest",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        sessionToken: text("sessionToken").notNull(),
        createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
        expiresAt: timestamp("expiresAt", { withTimezone: true }).notNull(),
    },
    (t) => ({
        sessionTokenUnique: uniqueIndex("guest_sessionToken_unique").on(t.sessionToken),
        expiresAtIdx: index("guest_expiresAt_idx").on(t.expiresAt),
    })
);
