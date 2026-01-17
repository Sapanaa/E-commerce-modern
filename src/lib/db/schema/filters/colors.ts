import { pgTable, text, uuid, uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { productVariants } from "../variants";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const colors = pgTable(
  "colors",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(), // "Red"
    slug: text("slug").notNull(), // "red"
    hexCode: text("hex_code").notNull(), // "#FF0000"
  },
  (t) => ({
    slugUnique: uniqueIndex("colors_slug_unique").on(t.slug),
  })
);

export const colorsRelations = relations(colors, ({ many }) => ({
  variants: many(productVariants),
}));

export const insertColorSchema = createInsertSchema(colors, {
  hexCode: z.string().regex(/^#([0-9A-Fa-f]{6})$/, "Invalid hex color"),
});
export const selectColorSchema = createSelectSchema(colors);
export type Color = z.infer<typeof selectColorSchema>;
export type NewColor = z.infer<typeof insertColorSchema>;
