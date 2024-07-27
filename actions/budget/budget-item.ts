"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const addBudgetItem = async (name: string, categoryId: string) => {
  const user = await currentUser();
  if (!user?.id) return;
  const budget = await db.budget.findFirst({
    where: {
      userId: user.id,
    },
  });
  if (!budget?.id) return;
  const newBudgetItem = await db.budgetItem.create({
    data: {
      name,
      categoryId,
      budgetId: budget.id,
    },
  });
  return {
    data: newBudgetItem,
    success: true,
    status: 201,
  };
};
