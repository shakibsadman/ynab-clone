"use state";
import React from "react";
import { map } from "underscore";
import { Check } from "lucide-react";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import { Button } from "@/components/ui/button";
import { regularSpendList } from "@/data/constants";
import saveRegularSpendToDb from "@/actions/budget/regular-spend";

type Props = {};

export default function RegularSpend({}: Props) {
  // const [regularSepnd, setRegularSpend] = React.useState<String[]>([]);
  const { reguler_spend, setRegulerSpend, nextStep, prevStep, canProceed } =
    useBudgetStore();
  const handleContiue = async () => {
    await saveRegularSpendToDb(reguler_spend);
    nextStep();
  };

  return (
    <div className="">
      <h2 className="mb-3 text-center text-xl font-semibold">
        🤔 Which of these do you regularly spend money on?
      </h2>
      <div className="flex flex-col items-center gap-3">
        {map(regularSpendList, (item, index) => (
          <button
            onClick={() => setRegulerSpend(item)}
            key={index + item.name}
            className="w-96 rounded-md bg-gray-100 p-4 text-left"
          >
            {item.name}
            {reguler_spend.includes(item) && (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={handleContiue} disabled={!canProceed()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
