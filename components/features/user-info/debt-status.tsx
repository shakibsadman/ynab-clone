"use client";
import React from "react";
import { Check } from "lucide-react";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import { map } from "underscore";
import { Button } from "@/components/ui/button";
import saveDebtToDb from "@/actions/budget/debt";

type Props = {};

const debtList = [
  { id: "credit", name: "💳 Credit card", type: "credit" },
  {
    id: "student",
    name: "🎓 Student loan",
    type: "student",
  },
  { id: "auto", name: "🚗 Auto Loans", type: "auto" },
  { id: "personal", name: "💰 Personal Loans", type: "personal" },
  { id: "medical", name: "🏥 Medical Loan", type: "medical" },
];

export default function DebtStatus({}: Props) {
  const { debt, setdebt, canProceed, nextStep, prevStep } = useBudgetStore();

  const handleContinue = async () => {
    const res = await saveDebtToDb(debt);
    if (res) nextStep();
  };

  return (
    <div className="">
      <h1 className="text-center text-xl font-medium">
        Do you currently have any debt?
      </h1>
      <div className="mt-3 flex flex-col items-center justify-center gap-2">
        {map(debtList, (item) => (
          <button
            key={item.id}
            onClick={() => setdebt(item)}
            className="w-80 rounded-md bg-gray-100 p-4 text-left"
          >
            {item.name}
            <span className="float-right">
              {debt?.length && debt.includes(item) && (
                <Check className="text-green-500" />
              )}
            </span>
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={handleContinue} disabled={!canProceed()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
