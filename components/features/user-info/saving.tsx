import React from "react";
import Title from "./title";
import { Check } from "lucide-react";

const savingList = [
  "😌 Emergency Fund",
  "🚗 New Car",
  "💰 Retirement",
  "📈 Investments",
  "🌴 Vacations",
  "👶 Baby",
  "🏠 New Home",
  "💍 Wedding",
];

type Props = {};

export default function Saving({}: Props) {
  return (
    <div>
      <Title>💰 Are you saving, or planning to, for any of these?</Title>
      <div className="mx-auto grid max-w-screen-lg grid-cols-2 place-content-center">
        {savingList.map((s) => (
          <button
            key={s}
            className="mb-2 flex w-96 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
