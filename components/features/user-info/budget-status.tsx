"use client";
import React, { use } from "react";
import { FinanceStatus } from "@/data/constants";
import { cn } from "@/lib/utils";
import StatusBtn from "./statusbtn";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";

type Props = {};

export default function BudgetStatus({}: Props) {
  const { budget_status: fStatus, setBudgetStatus: setStatus } =
    useBudgetStore();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="mb-2 text-xl font-semibold">
        How do you feel about your finances today?
      </h1>
      {FinanceStatus.map((status) => (
        <StatusBtn
          onClick={() => setStatus(status.value)}
          selected={fStatus === status.value}
          text={status.text}
          key={status.id}
        />
      ))}
    </div>
  );
}
