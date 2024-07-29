import React from "react";

import AssignPopover from "./assign-popover";
import { getCategories } from "@/actions/budget/categories";
import readyToAssign from "@/actions/budget/ready-to-assign";
import AddNewTransaction from "../transactions/add-new-transaction";

import Month from "./month";

type Props = {};

export default async function BudgetHeader({}: Props) {
  const categories = await getCategories();
  const data = await readyToAssign();
  return (
    <div className="flex h-24 items-center border-b px-6 py-1">
      <Month />
      <div className="flex flex-1 items-center justify-center rounded-md">
        <div className="flex gap-16 rounded-md bg-green-200 px-3 py-2">
          <div className="">
            <h1 className="text-xl font-semibold">{data?.availableBalance}</h1>
            <p className="text-sm">Ready to assign</p>
          </div>
          <AssignPopover categories={categories} />
        </div>
      </div>
      <AddNewTransaction />
    </div>
  );
}
