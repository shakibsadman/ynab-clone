"use client";
import React from "react";
import Title from "./title";
import { map } from "underscore";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import { Check } from "lucide-react";
import { extraList } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { createMany } from "@/actions/budget/item";

type Props = {};

export default function ExtraSpend({}: Props) {
  const { extras, setExtras, nextStep, prevStep, canProceed } =
    useBudgetStore();
  const handleContinue = async () => {
    const res = await createMany(extras);
    if (res) {
    }
  };
  return (
    <div>
      <Title>
        ❣️ What else do you want to include - without stress or guilt?
      </Title>
      <h3 className="mb-5 text-center">Last question, We promise!</h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-3">
          {map(extraList, (s) => (
            <button
              key={s.name}
              onClick={() => {
                setExtras(s);
              }}
              className="flex w-80 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100"
            >
              {s.name}
              {extras.includes(s) && <Check className="text-green-500" />}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-5">
        <Button variant="ghost">Go back</Button>
        <Button onClick={handleContinue}>Finish and go to your budget</Button>
      </div>
    </div>
  );
}
