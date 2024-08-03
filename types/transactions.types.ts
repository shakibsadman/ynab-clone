import * as z from "zod";

// Define the enum
const TransactionTypeEnum = z.enum(["INFLOW", "OUTFLOW"]);

// Type derived from the enum
type TransactionType = z.infer<typeof TransactionTypeEnum>;
export const TransactionSchema = z.object({
  amount: z.string(),
  date: z.date(),
  accountId: z.string(),
  budgetItemId: z.string(),
  description: z.string().optional(),
  type: TransactionTypeEnum,
});

export type TransactionPayloadType = z.infer<typeof TransactionSchema>;
