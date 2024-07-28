import { getItems } from "@/actions/budget/item";
import { getCategories } from "@/actions/budget/categories";
import readyToAssign from "@/actions/budget/ready-to-assign";
import {
  BudgetHeader,
  BudgetSidebar,
  BudgetTable,
} from "@/components/features/budget";
import BudgetInspector from "@/components/features/budget/budget-inspecter";
import BudgetInfo from "@/components/features/user-info/budget-info";

import React from "react";

export default async function Budget() {
  // const amount = await readyToAssign();
  const categories = await getCategories();

  return (
    <div className="flex">
      <BudgetInfo />
      <BudgetSidebar />
      <div className="w-full">
        <BudgetHeader />
        <div className="flex w-full bg-gray-200">
          <BudgetTable categories={categories} />
          <BudgetInspector />
        </div>
      </div>
    </div>
  );
}
