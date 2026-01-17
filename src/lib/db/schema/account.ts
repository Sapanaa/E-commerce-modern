import { pgTable, text, timestamp, uuid, uniqueIndex, index } from "drizzle-orm/pg-core";
import { user } from "./user";

export const account = pgTable(
    "account",
    {
        id: uuid("id").primaryKey().defaultRandom(),

        userId: uuid("userId")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),

        accountId: text("accountId").notNull(),
        providerId: text("providerId").notNull(), // "credentials", "google", "apple", etc.

        accessToken: text("accessToken"),
        refreshToken: text("refreshToken"),
        accessTokenExpiresAt: timestamp("accessTokenExpiresAt", { withTimezone: true }),
        refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt", { withTimezone: true }),
        scope: text("scope"),
        idToken: text("idToken"),

        // Used for credentials login (MVP). Store hashed password only.
        password: text("password"),

        createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp("updatedAt", { withTimezone: true })
            .notNull()
            .defaultNow()
            .$onUpdate(() => new Date()),
    },
    (t) => ({
        // ensures one account per provider/accountId tuple
        providerAccountUnique: uniqueIndex("account_provider_accountId_unique").on(t.providerId, t.accountId),
        userIdIdx: index("account_userId_idx").on(t.userId),
    })
);
