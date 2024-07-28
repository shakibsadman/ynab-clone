import { db } from "@/lib/db";

export const getItemsByBudgetId = async (budgetId: string) => {
  const items = await db.budgetItem.findMany({
    where: {
      budgetId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return items;
};
