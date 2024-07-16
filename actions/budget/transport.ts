"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function saveTransportToDb(transport: string) {
  const user = await currentUser();
  if (!user) {
    return;
  }
  const dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) {
    return;
  }
  const budget = await db.budget.findFirst({
    where: {
      userId: dbUser.id,
    },
  });
  if (!budget) {
    return;
  }
  const item = await db.item.create({
    data: {
      name: "Transport",
      value: transport,
      available: 0,
      budgetId: budget.id,
    },
  });
  return item;
}
