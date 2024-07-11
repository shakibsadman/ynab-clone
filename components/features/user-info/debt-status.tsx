"use client";
import React from "react";
import { Check } from "lucide-react";

type Props = {};

export default function DebtStatus({}: Props) {
  const [debt, setDebt] = React.useState<string[]>([]);

  const handleSelected = (option: string) => {
    //if already inclues filter it else add in the array
    if (debt.includes(option)) {
      const newDebt = debt.filter((item) => item !== option);
      setDebt(newDebt);
    } else {
      const newDebt = [...debt, option];
      setDebt(newDebt);
    }
  };
  return (
    <div className="mx-auto max-w-screen-sm">
      <h1 className="text-center text-xl font-medium">
        Do you currently have any debt?
      </h1>
      <div className="mt-3 flex flex-col items-center justify-center gap-2">
        <button
          onClick={() => handleSelected("credit")}
          className="w-80 rounded-md bg-gray-100 p-4 text-left"
        >
          💳 Credit card
          <span className="float-right">
            {debt.includes("credit") && <Check className="text-green-500" />}
          </span>
        </button>
        <button
          onClick={() => handleSelected("student")}
          className="w-80 rounded-md bg-gray-100 p-4 text-left"
        >
          🎓 Student loan
        </button>
        <button className="w-80 rounded-md bg-gray-100 p-4 text-left">
          🚗 Auto Loans
        </button>
        <button className="w-80 rounded-md bg-gray-100 p-4 text-left">
          💰 Personal Loans
        </button>
        <button className="w-80 rounded-md bg-gray-100 p-4 text-left">
          🏥 Medical Loan
        </button>
        <button className="font-semibold text-blue-500">
          I don&apos;t currently have debt
        </button>
      </div>
    </div>
  );
}
