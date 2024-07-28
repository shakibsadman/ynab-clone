import React from "react";

import AssignPopover from "./assign-popover";

import Month from "./month";

import { getItems } from "@/actions/budget/item";

type Props = {};

export default async function BudgetHeader({}: Props) {
  return (
    <div className="flex h-24 border-b px-3 py-1">
      <Month />
      <div className="flex flex-1 items-center justify-center rounded-md">
        <div className="flex gap-16 rounded-md bg-green-200 px-3 py-2">
          <div className="">
            <h1 className="text-xl font-semibold"></h1>
            <p className="text-sm">Ready to assign</p>
          </div>
          {/* <AssignPopover items={items} /> */}
        </div>
      </div>
    </div>
  );
}
