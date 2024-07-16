"use server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

interface Idebts {
  name: string;
  type: string;
  id: string;
}

export default async function saveDebtToDb(debts: Idebts[] | null) {
  if (!debts?.length) return { items: [] };
  const user = await currentUser();
  if (!user) return;
  const dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) return;
  //get budget for this user
  const dbBudget = await db.budget.findFirst({
    where: {
      userId: user.id,
    },
  });
  if (!dbBudget) return;
  //add items in item table
  const items = db.item.createMany({
    data: debts.map((debt) => ({
      budgetId: dbBudget.id,
      name: debt.name,
      value: debt.type,
      group: "debts",
      available: 0,
    })),
  });
  return items;
}
