"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
export default async function addStatus(status: string) {
  const user = await currentUser();
  if (!user) return;
  const dbUser = await db.user.findUnique({ where: { id: user.id } });
  if (!dbUser) return;
  let budget = await db.budget.findFirst({
    where: { userId: user.id },
  });
  if (!budget) return;
  const updatedBudget = await db.budget.update({
    where: { id: budget.id },
    data: { status: status },
  });
  return updatedBudget;
}
