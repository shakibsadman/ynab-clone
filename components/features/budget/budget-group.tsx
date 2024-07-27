"use client";
import React from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import AddBudgetItem from "./add-budget-item";

import * as Collapsible from "@radix-ui/react-collapsible";

import s from "./budget.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
  categoryId: string;
};

export default function BudgetGroup({ title, children, categoryId }: Props) {
  const [open, setOpen] = React.useState(true);
  return (
    <Collapsible.Root className="" open={open} onOpenChange={setOpen}>
      <div className="">
        <div className="relative flex gap-4 bg-gray-100 px-2">
          <input type="checkbox" />
          <AddBudgetItem categoryId={categoryId} />
          <Collapsible.Trigger
            className={cn(
              "flex w-full flex-1 items-center justify-between bg-gray-100 py-2 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            )}
          >
            <div className="flex">
              <h1 className="text-semibold capitalize">{title}</h1>
            </div>
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          </Collapsible.Trigger>
        </div>
      </div>

      <Collapsible.Content className={s.CollapsibleContent}>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
