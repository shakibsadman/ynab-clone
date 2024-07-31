"use client";
import React from "react";
import { BudgetItem as Item, Prisma } from "@prisma/client";
import useBudgetInspector from "@/hooks/zustand/use-budget-inspector";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { EditableInput } from "./editable-input";
import { updateItemById } from "@/actions/budget/item";

type Props = {
  item: Prisma.BudgetItemGetPayload<{ include: { transactions: true } }>;
};

export default function BudgetItem({ item }: Props) {
  const { setSelectedItem, selectedItem } = useBudgetInspector();
  const isSelectd = selectedItem?.id === item.id;
  const name = item.name;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleInput = async (data: any) => {
    await updateItemById(item.id, {
      assigned: Number(data.assigned),
      available: parseFloat(data.assigned),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleInput)}
      className={cn("w-full cursor-pointer", {
        "bg-blue-100": isSelectd,
      })}
      onClick={() => setSelectedItem(item)}
      key={item.id}
    >
      <div className="flex w-full items-center gap-3 py-1.5 pl-3">
        <input checked={isSelectd} type="checkbox" className="" />
        <div className="w-2/5">
          <h1 className="mb-1 capitalize">{item.name}</h1>
          <div className="h-1 w-full overflow-hidden rounded-sm bg-gray-300">
            <div
              className="h-full bg-green-500"
              style={{ width: `${(item.available / item.assigned) * 100}%` }}
            />
          </div>
        </div>
        <div className="w-1/5 text-center">
          <EditableInput
            register={register}
            name="assigned"
            prefix="$"
            value={item.assigned}
          />
        </div>
        <div className="w-1/5 text-center">
          {item.transactions.length && (
            <div
              className={cn({
                "text-red-500": item.transactions[0].type === "OUTFLOW",
              })}
            >
              <span className="text-semibold mr-2 text-xl">
                {item.transactions[0].type === "OUTFLOW" ? "-" : "+"}
              </span>
              <span>{item.transactions[0].amount}</span>
            </div>
          )}
        </div>
        <div className="w-1/5 text-center">
          <h1>$ {item.available}</h1>
        </div>
      </div>
    </form>
  );
}
