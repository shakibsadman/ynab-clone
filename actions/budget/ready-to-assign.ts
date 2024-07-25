"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserBudget } from "@/data/budget";

async function calculateTotalAssignedBalance(
  budgetId: string,
): Promise<number> {
  try {
    const items = await db.item.findMany({
      where: {
        budgetId: budgetId,
      },
      select: {
        assigned: true,
      },
    });

    const totalAssigned = items.reduce((sum, item) => sum + item.assigned, 0);

    return totalAssigned;
  } catch (error) {
    console.error("Error calculating total assigned balance:", error);
    throw error;
  }
}

async function calculateTotalAccountBalance(userId: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        bank_accounts: {
          select: {
            working_balance: true,
          },
        },
      },
    });

    if (!user || !user.bank_accounts || user.bank_accounts.length === 0) {
      return 0;
    }

    const totalBalance = user.bank_accounts.reduce(
      (sum, account) => sum + Number(account.working_balance),
      0,
    );

    return totalBalance;
  } catch (error) {
    console.error("Error calculating total account balance:", error);
    throw error;
  }
}

export default async function readyToAssign() {
  const user = await currentUser();
  if (!user) return null;
  const budget = await getUserBudget(user.id as string);
  if (!budget) return null;
  const totalAssigned = await calculateTotalAssignedBalance(budget.id);
  const totalBalance = await calculateTotalAccountBalance(user.id as string);
  const availableBalance = Number(totalBalance) - totalAssigned;
  return {
    totalAssigned,
    totalBalance,
    availableBalance,
  };
}
