"use client";
import React from "react";
import { Check } from "lucide-react";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";

type Props = {};

export default function DebtStatus({}: Props) {
  const { debt, setdebt } = useBudgetStore();

  return (
    <div className="mx-auto max-w-screen-sm">
      <h1 className="text-center text-xl font-medium">
        Do you currently have any debt?
      </h1>
      <div className="mt-3 flex flex-col items-center justify-center gap-2">
        <button
          onClick={() => setdebt("credit")}
          className="w-80 rounded-md bg-gray-100 p-4 text-left"
        >
          💳 Credit card
          <span className="float-right">
            {debt?.length && debt.includes("credit") && (
              <Check className="text-green-500" />
            )}
          </span>
        </button>
        <button
          onClick={() => setdebt("student")}
          className="w-80 rounded-md bg-gray-100 p-4 text-left"
        >
          🎓 Student loan
          <span className="float-right">
            {debt?.length && debt.includes("student") && (
              <Check className="text-green-500" />
            )}
          </span>
        </button>
        <button
          onClick={() => setdebt("auto")}
          className="w-80 rounded-md bg-gray-100 p-4 text-left"
        >
          🚗 Auto Loans
          <span className="float-right">
            {debt?.length && debt.includes("auto") && (
              <Check className="text-green-500" />
            )}
          </span>
        </button>
        <button
          onClick={() => setdebt("personal")}
          className="w-80 rounded-md bg-gray-100 p-4 text-left"
        >
          💰 Personal Loans
          <span className="float-right">
            {debt?.length && debt.includes("personal") && (
              <Check className="text-green-500" />
            )}
          </span>
        </button>
        <button
          onClick={() => setdebt("medical")}
          className="w-80 rounded-md bg-gray-100 p-4 text-left"
        >
          🏥 Medical Loan
          <span className="float-right">
            {debt?.length && debt.includes("medical") && (
              <Check className="text-green-500" />
            )}
          </span>
        </button>

        <button
          onClick={() => setdebt("none")}
          className="font-semibold text-blue-500"
        >
          I don&apos;t currently have debt
          <span className="float-right">
            {debt?.length && debt.includes("none") && (
              <Check className="text-green-500" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
