"use client";
import React from "react";
import _ from "underscore";
import { Check } from "lucide-react";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";

const tansports = [
  "🚗 Car",
  "🚲 Bike",
  "🚅 Public Transport",
  "👟 Walk",
  "🚙 Rideshare(Uber/Lyft/etc.)",
  "🧑‍🦼 Wheelchair",
  "🏍️ Motorcycle",
];

type Props = {};

export default function Transport({}: Props) {
  const { transport, setTransport } = useBudgetStore();
  return (
    <div>
      <h1 className="mb-3 text-center text-xl font-semibold">
        🚉 How do you get around?
      </h1>
      <div className="mx-auto grid max-w-screen-md grid-cols-2 place-content-center justify-items-center gap-3">
        {_.map(tansports, (t) => {
          return (
            <button
              key={t}
              onClick={() => setTransport(t)}
              className="w-80 rounded-md bg-gray-100 p-4 text-left"
            >
              {t}
              {/* if this transport is selected */}
              {transport === t && (
                <span className="float-right">
                  <Check className="text-green-500" />
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-3 text-blue-500">None of this apply to me</button>
      </div>
    </div>
  );
}
