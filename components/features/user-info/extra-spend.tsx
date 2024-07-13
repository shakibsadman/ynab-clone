"use client";
import React from "react";
import Title from "./title";
import { map } from "underscore";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import { Check } from "lucide-react";
import { extraList } from "@/data/constants";

type Props = {};

export default function ExtraSpend({}: Props) {
  const { extras, setExtras } = useBudgetStore();
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
                setExtras(s.name);
              }}
              className="flex w-80 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100"
            >
              {s.icon} {s.name}
              {extras.includes(s.name) && <Check className="text-green-500" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
