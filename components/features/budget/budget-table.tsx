import React from "react";

import { GroupedBudgetItems } from "@/types/items";

import BudgetGroup from "./budget-group";

type Props = {
  items?: GroupedBudgetItems;
};

export default function BudgetTable({ items }: Props) {
  return (
    <div className="w-full px-5">
      {/* budget table header */}
      <div className="flex h-10 w-full items-center justify-between">
        <div className="flex w-2/5 gap-2">
          <input type="checkbox" />
          <span className="uppercase">Categroy</span>
        </div>
        <div className="w-40 text-center">
          <span> Assigned</span>
        </div>
        <div>
          <span>Available</span>
        </div>
      </div>
      {/* budget table body */}
      {items && (
        <div className="w-full">
          <BudgetGroup title="Bills">
            <div className="">
              {items.bills.map((item) => (
                <div className="w-full" key={item.id}>
                  <div className="flex w-full gap-3 py-1">
                    <input type="checkbox" className="" />
                    <div className="w-3/5">
                      <h1 className="capitalize">{item.name}</h1>
                      <div className="h-1 rounded-sm bg-green-500" />
                    </div>
                    <div className="">
                      <h1>{item.assigned}</h1>
                    </div>
                    <div className="">
                      <h1>{item.available}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BudgetGroup>
          <BudgetGroup title="Needs">
            <div className="">
              {items.needs.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
          </BudgetGroup>
          <BudgetGroup title="Wants">
            <div className="">
              {items.wants.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
          </BudgetGroup>
        </div>
      )}
    </div>
  );
}
