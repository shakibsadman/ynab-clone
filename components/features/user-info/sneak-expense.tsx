"use client";
import React from "react";
import { map } from "underscore";
import { Check } from "lucide-react";
import Title from "./title";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import { sneakExpenseList } from "@/data/constants";
import { createMany } from "@/actions/budget/item";
import { Button } from "@/components/ui/button";
type Props = {};

export default function SneakExpense({}: Props) {
  const { sneak_expense, setSneakExpense, nextStep, prevStep, canProceed } =
    useBudgetStore();

  const handleContinue = async () => {
    const res = await createMany(sneak_expense);
    if (res) {
      nextStep();
    }
  };

  return (
    <div>
      <Title>😥 What are some expenses sneak up on you?</Title>
      <div className="flex flex-col items-center gap-3">
        {map(sneakExpenseList, (s, i) => (
          <button
            key={i}
            className={`flex w-96 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100 ${
              sneak_expense?.includes(s) ? "bg-gray-100" : ""
            }`}
            onClick={() => setSneakExpense(s)}
          >
            <span> {s.name}</span>
            {sneak_expense?.includes(s) && <Check className="text-green-500" />}
          </button>
        ))}
      </div>
      <div className="flex justify-end gap-5">
        <Button variant="ghost">Go back</Button>
        <Button onClick={handleContinue} disabled={!canProceed()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
