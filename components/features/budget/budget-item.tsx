import React from "react";
import { Item } from "@prisma/client";

type Props = {
  item: Item;
};

export default function BudgetItem({ item }: Props) {
  return (
    <div className="w-full" key={item.id}>
      <div className="flex w-full items-center gap-3 py-1.5 pl-3">
        <input type="checkbox" className="" />
        <div className="w-3/5">
          <h1 className="capitalize">{item.name}</h1>
          <div className="h-1 rounded-sm bg-green-500" />
        </div>
        <div className="w-1/5 text-center">
          <h1>{item.assigned}</h1>
        </div>
        <div className="w-1/5 text-center">
          <h1>{item.available}</h1>
        </div>
      </div>
    </div>
  );
}
