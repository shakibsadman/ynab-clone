import * as z from "zod";
import { Item } from "@prisma/client";

export const ItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  group: z.string(),
});
export type TItem = z.infer<typeof ItemSchema>;

export interface GroupedBudgetItems {
  [key: string]: Item[];
}
