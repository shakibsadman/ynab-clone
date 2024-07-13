"use client";

import React, { use } from "react";
import { Check } from "lucide-react";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import savePeople from "@/actions/budget/save-people";
import { Button } from "@/components/ui/button";
type Props = {};

export default function SelectPerson({}: Props) {
  const { persons, setPerson, nextStep, prevStep, canProceed } =
    useBudgetStore();
  // const [persons, setPersons] = React.useState<string[]>([]);
  const handleSavePeople = async () => {
    const data = await savePeople(persons);
    if (data) {
      nextStep();
    }
  };

  return (
    <div>
      <h1 className="mb-3 text-center text-xl font-semibold">
        Who do you spend money on?
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-flow-col grid-rows-4 justify-items-center gap-3">
          <button
            onClick={() => setPerson("myself")}
            className="w-80 rounded-md bg-gray-100 p-4 text-left"
          >
            <span>Myself</span>
            {/* if this person is selected */}
            {persons.includes("myself") ? (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setPerson("partner")}
            className="w-80 rounded-md bg-gray-100 p-4 text-left"
          >
            <span>My partner</span>
            {/* if this person is selected */}
            {persons.includes("partner") ? (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setPerson("adults")}
            className="w-80 rounded-md bg-gray-100 p-4 text-left"
          >
            <span>Other adults</span>
            {/* if this person is selected */}
            {persons.includes("adults") ? (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setPerson("kids")}
            className="w-80 rounded-md bg-gray-100 p-4 text-left"
          >
            <span>Kids</span>
            {/* if this person is selected */}
            {persons.includes("kids") ? (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setPerson("pets")}
            className="w-80 rounded-md bg-gray-100 p-4 text-left"
          >
            <span>Pets</span>
            {/* if this person is selected */}
            {persons.includes("pets") ? (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setPerson("teens")}
            className="w-80 rounded-md bg-gray-100 p-4 text-left"
          >
            <span>Teens (13+)</span>
            {/* if this person is selected */}
            {persons.includes("teens") ? (
              <span className="float-right">
                <Check className="text-green-500" />
              </span>
            ) : null}
          </button>
        </div>
      </div>
      <div className="mt-3 flex justify-end gap-5">
        <Button onClick={prevStep} className="">
          Go back
        </Button>
        <Button
          disabled={!canProceed()}
          onClick={handleSavePeople}
          className=""
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
