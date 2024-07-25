import { db } from "@/lib/db";

export const getBankAccontsByUserId = async (userId: string) => {
  const accounts = await db.bankAccount.findMany({
    where: {
      userId,
    },
  });
  return accounts;
};
