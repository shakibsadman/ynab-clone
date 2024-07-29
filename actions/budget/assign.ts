"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const assignAmount = async (budgetItemId: string, amount: number) => {
  const udpatedItem = await db.budgetItem.update({
    where: {
      id: budgetItemId,
    },
    data: {
      assigned: { increment: amount },
    },
  });
  revalidatePath("/budget");
  return udpatedItem;
};
