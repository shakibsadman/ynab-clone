"use client";
import React from "react";
import { format, addMonths, subMonths } from "date-fns";
import {
  CircleChevronRight,
  CircleChevronLeft,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  availableBudget: Number;
};

export default function BudgetHeader({ availableBudget }: Props) {
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
    <div className="flex h-24 border-b px-3 py-2">
      <div className="flex gap-2 py-4">
        <CircleChevronLeft onClick={subtractMonth} className="text-blue-500" />
        <h1 className="text-xl font-bold">{format(now, "MMM yyyy")}</h1>
        <CircleChevronRight onClick={addMonth} className="text-blue-500" />
      </div>
      <div className="flex flex-1 items-center justify-center rounded-md">
        <div className="flex gap-16 rounded-md bg-green-200 p-3">
          <div className="">
            <h1 className="text-xl font-semibold">
              $ {availableBudget.toFixed(2)}
            </h1>
            <p className="text-sm">Ready to assign</p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                Assign
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Popover content</PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
