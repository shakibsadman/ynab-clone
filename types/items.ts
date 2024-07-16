import * as z from "zod";

export const ItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  group: z.string(),
});
export type TItem = z.infer<typeof ItemSchema>;
