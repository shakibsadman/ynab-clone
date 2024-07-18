"use server";
import { db } from "@/lib/db";
import { getBankAccontsByUserId } from "@/data/bank-account";
import { currentUser } from "@/lib/auth";

export default async function getUserAccounts() {
  const user = await currentUser();
  if (!user || !user.id) return;
  const accounts = await getBankAccontsByUserId(user.id);
  return accounts;
}
