"use state";
import React from "react";
import { map } from "underscore";
import { Check } from "lucide-react";
const regularSpend = [
  "🛒 Grocerices",
  "📱 Phone",
  "💻 Interent",
  "💇 Personal Care",
  "👖 Clothes",
];
type Props = {};

export default function RegularSpend({}: Props) {
  const [regularSepnd, setRegularSpend] = React.useState<String[]>([]);
  const handleClick = (option: string) => {
    if (regularSepnd.includes(option)) {
      const newRegularSpend = regularSepnd.filter((item) => item !== option);
      setRegularSpend(newRegularSpend);
    } else {
      const newRegularSpend = [...regularSepnd, option];
      setRegularSpend(newRegularSpend);
    }
  };
  return (
    <div className="">
      <h2 className="mb-3 text-center text-xl font-semibold">
        🤔 Which of these do you regularly spend money on?
      </h2>
      <div className="flex flex-col items-center gap-3">
        {map(regularSpend, (item, index) => (
          <button
            onClick={() => handleClick(item)}
            key={index + item}
            className="w-96 rounded-md bg-gray-100 p-4 text-left"
          >
            {item}
            {regularSepnd.includes(item) && (
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
