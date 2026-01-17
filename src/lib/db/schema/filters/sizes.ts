import { pgTable, integer, text, uuid, uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { productVariants } from "../variants";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const sizes = pgTable(
  "sizes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(), // "M" or "10"
    slug: text("slug").notNull(), // "m" or "10"
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (t) => ({
    slugUnique: uniqueIndex("sizes_slug_unique").on(t.slug),
  })
);

export const sizesRelations = relations(sizes, ({ many }) => ({
  variants: many(productVariants),
}));

export const insertSizeSchema = createInsertSchema(sizes, {
  sortOrder: z.number().int().min(0),
});
export const selectSizeSchema = createSelectSchema(sizes);
export type Size = z.infer<typeof selectSizeSchema>;
export type NewSize = z.infer<typeof insertSizeSchema>;
