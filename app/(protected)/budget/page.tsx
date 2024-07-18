import { getItems } from "@/actions/budget/item";
import { BudgetSidebar, BudgetTable } from "@/components/features/budget";
import BudgetInfo from "@/components/features/user-info/budget-info";
import { getUserAccounts } from "@/actions/account";
import React from "react";

export default async function Budget() {
  const items = await getItems();

  return (
    <div>
      <BudgetInfo />
      <div className="flex w-full">
        <BudgetSidebar />
        <BudgetTable items={items} />
      </div>
    </div>
  );
}
