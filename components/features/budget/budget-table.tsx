import React from "react";

import { GroupedBudgetItems } from "@/types/items";
import { Plus } from "lucide-react";

import BudgetGroup from "./budget-group";
import BudgetItem from "./budget-item";
import AddCategory from "./add-category";

type Props = {
  items?: GroupedBudgetItems;
};

export default function BudgetTable({ items }: Props) {
  return (
    <div className="w-full bg-white">
      {/* budget table header */}
      <div className="border-b px-5 py-2">
        <AddCategory />
      </div>
      <div className="flex h-10 w-full items-center">
        <div className="flex w-full gap-3 pl-3">
          <input type="checkbox" />
          <div className="flex w-2/5">
            <span className="uppercase">Categroy</span>
          </div>
          <div className="w-1/5 text-center">
            <span> Assigned</span>
          </div>
          <div className="w-1/5 text-center">
            <span>Available</span>
          </div>
        </div>
      </div>
      {/* budget table body */}
      {items && (
        <div className="w-full">
          <BudgetGroup title="Bills">
            <div className="">
              {items.bills.map((item) => (
                <BudgetItem key={item.id} item={item} />
              ))}
            </div>
          </BudgetGroup>
          <BudgetGroup title="Needs">
            <div className="">
              {items.needs.map((item) => (
                <BudgetItem key={item.id} item={item} />
              ))}
            </div>
          </BudgetGroup>
          <BudgetGroup title="Wants">
            <div className="">
              {items.wants.map((item) => (
                <BudgetItem key={item.id} item={item} />
              ))}
            </div>
          </BudgetGroup>
        </div>
      )}
    </div>
  );
}
