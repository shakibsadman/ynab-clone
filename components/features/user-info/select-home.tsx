import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import React from "react";
import { Check } from "lucide-react";
import setDbHome from "@/actions/budget/home";
import { Button } from "@/components/ui/button";

type Props = {};

export default function SelectHome({}: Props) {
  const { home_status, setHome, nextStep, prevStep, canProceed } =
    useBudgetStore();

  const handleContinue = async () => {
    const res = await setDbHome(home_status as string);
    if (res) nextStep();
  };
  return (
    <div>
      <h1 className="mb-3 text-center text-xl font-medium">
        🏠 Tell us about your home?
      </h1>
      <div className="mx-auto flex max-w-sm flex-col gap-3">
        <button
          onClick={() => setHome("rent")}
          className="rounded-md bg-gray-100 p-4 text-left"
        >
          I rent
          {/* check mark if selectd */}
          {home_status === "rent" ? (
            <span className="float-right">
              <Check className="text-green-500" />
            </span>
          ) : null}
        </button>
        <button
          onClick={() => setHome("own")}
          className="rounded-md bg-gray-100 p-4 text-left"
        >
          I own
          {/* check mark if selectd */}
          {home_status === "own" ? (
            <span className="float-right">
              <Check className="text-green-500" />
            </span>
          ) : null}
        </button>
        <button
          onClick={() => setHome("others")}
          className="rounded-md bg-gray-100 p-4 text-left"
        >
          Other
          {/* check mark if selectd */}
          {home_status === "others" ? (
            <span className="float-right">
              <Check className="text-green-500" />
            </span>
          ) : null}
        </button>
      </div>
      <div className="flex justify-end pt-20">
        <Button onClick={handleContinue} disabled={!canProceed()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
