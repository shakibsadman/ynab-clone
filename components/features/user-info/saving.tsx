import React from "react";
import Title from "./title";
import { Check } from "lucide-react";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import { savingItemsList } from "@/data/constants";
import { Button } from "@/components/ui/button";
type Props = {};

export default function Saving({}: Props) {
  const { saving, setSaving, prevStep, nextStep, canProceed } =
    useBudgetStore();
  return (
    <div>
      <Title>💰 Are you saving, or planning to, for any of these?</Title>
      <div className="mx-auto grid max-w-screen-lg grid-cols-2 place-content-center">
        {savingItemsList.map((s) => (
          <button
            key={s.name}
            onClick={() => setSaving(s)}
            className="mb-2 flex w-96 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100"
          >
            {s.name}
            {saving.includes(s) && <Check className="text-green-500" />}
          </button>
        ))}
      </div>
      <div className="flex justify-end gap-5">
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={nextStep} disabled={!canProceed()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
