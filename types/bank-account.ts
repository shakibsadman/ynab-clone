import { z } from "zod";

export const BankAccountSchema = z.object({
  name: z.string().min(1),
  type: z.enum(["checking", "savings", "credit", "line of credit", "cash"]),
  wroking_balance: z.string(),
});

export type TBankAccount = z.infer<typeof BankAccountSchema>;
