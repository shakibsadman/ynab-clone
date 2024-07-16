"use client";
import React from "react";
import { Check } from "lucide-react";
import { map } from "underscore";
import Title from "./title";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import { subscriptionList } from "@/data/constants";
import { createMany } from "@/actions/budget/item";
import { Button } from "@/components/ui/button";

// const subscriptionList = [
//   "🎵 Music",
//   "📺 TV streaming",
//   "💪 Fitness",
//   "🎓 Online courses",
//   "📖 Audio or ebooks",
//   "📰 News",
//   "🍖 Meal delivery",
// ];

type Props = {};

export default function Subcribtions({}: Props) {
  const { subscriptions, setSubscription, nextStep, prevStep, canProceed } =
    useBudgetStore();
  const handleContiue = async () => {
    const res = await createMany(subscriptions);
    if (res) {
      nextStep();
    }
  };
  return (
    <div>
      <Title>🍿 Which of these subscriptions do you have?</Title>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-2 place-content-end place-items-center gap-2">
          {map(subscriptionList, (s, i) => (
            <button
              key={i}
              className="mb-2 flex w-96 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100"
              onClick={() => setSubscription(s)}
            >
              {s.name}
              {subscriptions.includes(s) && (
                <Check className="text-green-500" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-5">
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={handleContiue} disabled={!canProceed()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
