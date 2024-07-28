"use client";
import React from "react";
import { format, addMonths, subMonths } from "date-fns";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";

type Props = {};

export default function Month({}: Props) {
  const [now, setNow] = React.useState(new Date());

  //add a month on the CircleCheronRight butotn
  const addMonth = () => {
    const nextMonth = addMonths(now, 1);
    setNow(nextMonth);
  };
  //subtract a month on the CircleCheronLeft butotn
  const subtractMonth = () => {
    const prevMonth = subMonths(now, 1);
    setNow(prevMonth);
  };
  return (
    <div className="flex gap-2 py-4">
      <CircleChevronLeft onClick={subtractMonth} className="text-blue-500" />
      <h1 className="text-xl font-bold">{format(now, "MMM yyyy")}</h1>
      <CircleChevronRight onClick={addMonth} className="text-blue-500" />
    </div>
  );
}
