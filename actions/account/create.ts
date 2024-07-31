"use server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import type { TBankAccount } from "@/types/bank-account";
import { revalidatePath } from "next/cache";
export default async function create(account: TBankAccount) {
  const user = await currentUser();
  if (!user || !user.id) return { message: "user not found" };
  const data = await db.bankAccount.create({
    data: {
      name: account.name,
      type: account.type,
      working_balance: Number(account.wroking_balance),
      userId: user.id,
    },
  });
  revalidatePath("/budget");
  return data;
}
