import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";

import * as schema from "./schema";

import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
});

const env = envSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
});

// Neon HTTP client (serverless-safe)
const sql = neon(env.DATABASE_URL);

// Drizzle instance (typed with schema)
export const db = drizzle(sql, { schema });

// Optional: export schema namespace for convenience
export { schema };
