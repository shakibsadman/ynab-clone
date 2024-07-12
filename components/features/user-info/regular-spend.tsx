"use state";
import React from "react";
import { map } from "underscore";
import { Check } from "lucide-react";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
const regularSpend = [
  "🛒 Grocerices",
  "📱 Phone",
  "💻 Interent",
  "💇 Personal Care",
  "👖 Clothes",
];
type Props = {};

export default function RegularSpend({}: Props) {
  // const [regularSepnd, setRegularSpend] = React.useState<String[]>([]);
  const { reguler_spend, setRegulerSpend } = useBudgetStore();

  return (
    <div className="">
      <h2 className="mb-3 text-center text-xl font-semibold">
        🤔 Which of these do you regularly spend money on?
      </h2>
      <div className="flex flex-col items-center gap-3">
        {map(regularSpend, (item, index) => (
          <button
            onClick={() => setRegulerSpend(item)}
            key={index + item}
            className="w-96 rounded-md bg-gray-100 p-4 text-left"
          >
            {item}
            {reguler_spend.includes(item) && (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
