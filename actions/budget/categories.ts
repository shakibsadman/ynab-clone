"use server";

import { Category } from "@prisma/client";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const getCategories = async () => {
  const user = await currentUser();

  const categories = await db.category.findMany({
    where: { userId: user?.id },
    include: {
      budgetItems: true,
    },
  });
  return categories;
};

export const addCategory = async (name: string) => {
  const user = await currentUser();
  if (!user?.id) return { message: "User not found", success: false };
  const category = await db.category.create({
    data: {
      name,
      userId: user?.id,
    },
  });
  revalidatePath("/budget");
  if (category)
    return { message: "Category added successfully", success: true };
};
