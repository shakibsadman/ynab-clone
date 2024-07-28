"use server";
import { getUserBudget } from "@/data/budget";
import { getItemsByBudgetId } from "@/data/items";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { BudgetItem as Item } from "@prisma/client";
import type { GroupedBudgetItems } from "@/types/items";
import { revalidatePath } from "next/cache";

interface TItems {
  type: string;
  group: string;
  name: string;
  categoryId: string;
}

export async function createMany(items: TItems[]) {
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
  const item = await db.budgetItem.createMany({
    data: items.map((item) => ({
      name: item.name,
      available: 0,
      value: item.type,
      group: item.group,
      budgetId: budget.id,
      categoryId: item.categoryId,
    })),
  });
  return item;
}

//  create a single item

export async function create(item: TItems) {
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
  if (!budget) return;
  //create item
  const createdItem = await db.budgetItem.create({
    data: {
      name: item.name,
      available: 0,
      value: item.type,
      group: item.group,
      budgetId: budget.id as string,
      categoryId: item.categoryId,
    },
  });
  return createdItem;
}

export const getItems = async () => {
  const user = await currentUser();
  if (!user?.id) {
    return;
  }
  const dbUser = await getUserById(user.id);
  if (!dbUser) return;
  const budget = await getUserBudget(dbUser.id);
  if (!budget) return;
  const items = await getItemsByBudgetId(budget.id);
  function groupBudgetItems(items: Item[]): GroupedBudgetItems {
    return items.reduce((acc: GroupedBudgetItems, item: Item) => {
      const groupName = item.group || "ungrouped";
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(item);
      return acc;
    }, {});
  }
  const groupedItems: GroupedBudgetItems = groupBudgetItems(items);
  return groupedItems;
};

export const updateItemById = async (id: string, data: Partial<Item>) => {
  const item = await db.budgetItem.update({
    where: { id },
    data,
  });
  revalidatePath("/budget");
  return item;
};
