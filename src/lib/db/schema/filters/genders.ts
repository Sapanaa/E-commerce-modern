import { pgTable, text, uuid, uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { products } from "../products";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const genders = pgTable(
  "genders",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    label: text("label").notNull(), // "Men"
    slug: text("slug").notNull(), // "men"
  },
  (t) => ({
    slugUnique: uniqueIndex("genders_slug_unique").on(t.slug),
  })
);

export const gendersRelations = relations(genders, ({ many }) => ({
  products: many(products),
}));

export const insertGenderSchema = createInsertSchema(genders);
export const selectGenderSchema = createSelectSchema(genders);
export type Gender = z.infer<typeof selectGenderSchema>;
export type NewGender = z.infer<typeof insertGenderSchema>;
