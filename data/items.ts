import { db } from "@/lib/db";

export const getItemsByBudgetId = async (budgetId: string) => {
  const items = await db.item.findMany({
    where: {
      budgetId,
    },
  });

  return items;
};
