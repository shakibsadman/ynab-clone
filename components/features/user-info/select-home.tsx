import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import React from "react";
import { Check } from "lucide-react";

type Props = {};

export default function SelectHome({}: Props) {
  const { home_status, setHome } = useBudgetStore();
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
    </div>
  );
}
