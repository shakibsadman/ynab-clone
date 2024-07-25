import { db } from "@/lib/db";

export const getUserBudget = async (userId: string) => {
  const budget = await db.budget.findFirst({
    where: {
      userId,
    },
  });
  return budget;
};
