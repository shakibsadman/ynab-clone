"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const createBudget = async (
  status: "stressed" | "stable" | "unsrue" | "confident",
  people: string[],
  home: string,
  loan: string[],
) => {
  const user = await currentUser();
  if (!user) return;
  const dbUser = await db.user.findUnique({ where: { id: user.id } });
  if (!dbUser) return;

  let budget = await db.budget.findFirst({
    where: { userId: user.id },
  });
  if (!budget) return;

  await db.budget.update({
    where: { id: budget.id },
    data: { status, people: people },
  });

  const createdItems = await db.$transaction([
    db.item.create({
      data: {
        name: "home",
        value: home,
        group: "bills",
        budgetId: budget.id,
        available: 0,
      },
    }),
    db.item.create({
      data: { name: "groceries", budgetId: budget.id, available: 0 },
    }),
    db.item.create({
      data: { name: "transport", budgetId: budget.id, available: 0 },
    }),
  ]);

  return { success: true };
};
