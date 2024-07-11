import { BudgetSidebar } from "@/components/features/budget";
import BudgetInfo from "@/components/features/user-info/budget-info";
import React from "react";

export default function Budget() {
  return (
    <div>
      <BudgetInfo />
      <BudgetSidebar />
    </div>
  );
}
