"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { Transaction } from "@prisma/client";
import { revalidatePath } from "next/cache";
import type { TransactionPayloadType } from "@/types/transactions.types";

export const createTransaction = async (payload: TransactionPayloadType) => {
  const user = await currentUser();
  if (!user?.id) return;

  const newTransaction = await db.transaction.create({
    data: {
      ...payload,
      amount: Number(payload.amount),
      userId: user.id,
    },
  });

  //add or deduct available balance based on type of transaction
  // Determine whether to increment or decrement based on transaction type
  const updateOperation = payload.type === "INFLOW" ? "increment" : "decrement";

  const item = await db.budgetItem.update({
    where: {
      id: newTransaction.budgetItemId,
    },
    data: {
      available: { [updateOperation]: newTransaction.amount },
    },
  });
  revalidatePath("/budget");

  return newTransaction;
};
