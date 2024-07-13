"use client";
import React from "react";
import { map } from "underscore";
import { Check } from "lucide-react";
import Title from "./title";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";

const sneakExpense = [
  "💳 Aunual credit card fees",
  "🩺 Medical Expenses",
  "💸Taxes or other fees",
];

type Props = {};

export default function SneakExpense({}: Props) {
  const { sneak_expense, setSneakExpense } = useBudgetStore();

  return (
    <div>
      <Title>😥 What are some expenses sneak up on you?</Title>
      <div className="flex flex-col items-center gap-3">
        {map(sneakExpense, (s, i) => (
          <button
            key={i}
            className={`flex w-96 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100 ${
              sneak_expense?.includes(s) ? "bg-gray-100" : ""
            }`}
            onClick={() => setSneakExpense(s)}
          >
            <span> {s}</span>
            {sneak_expense?.includes(s) && <Check className="text-green-500" />}
          </button>
        ))}
      </div>
    </div>
  );
}
