import { pgTable, text, timestamp, uuid, uniqueIndex, index } from "drizzle-orm/pg-core";
import { user } from "./user";

export const session = pgTable(
    "session",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        userId: uuid("userId")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),

        token: text("token").notNull(),
        ipAddress: text("ipAddress"),
        userAgent: text("userAgent"),

        expiresAt: timestamp("expiresAt", { withTimezone: true }).notNull(),
        createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp("updatedAt", { withTimezone: true })
            .notNull()
            .defaultNow()
            .$onUpdate(() => new Date()),
    },
    (t) => ({
        tokenUnique: uniqueIndex("session_token_unique").on(t.token),
        userIdIdx: index("session_userId_idx").on(t.userId),
    })
);
