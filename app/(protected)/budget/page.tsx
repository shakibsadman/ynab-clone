import { BudgetSidebar } from "@/components/features/budget";
import InfoForm from "@/components/features/user-info/info-form";
import React from "react";

export default function Budget() {
  return (
    <div>
      <InfoForm />
      <BudgetSidebar />
    </div>
  );
}
