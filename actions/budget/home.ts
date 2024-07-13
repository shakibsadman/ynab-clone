"use server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function setDbHome(value: string) {
  const user = await currentUser();
  if (!user) return;
  const dbUser = await db.user.findUnique({ where: { id: user.id } });
  if (!dbUser) return;
  const budget = await db.budget.findFirst({ where: { userId: user.id } });
  if (!budget) return;
  const item = await db.item.create({
    data: {
      name: "home",
      group: "bills",
      value,
      budgetId: budget.id,
      available: 0,
    },
  });
  return item;
}
