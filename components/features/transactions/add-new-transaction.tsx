"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { BankAccount, Prisma, TransactionType } from "@prisma/client";
import { map } from "underscore";
import { createTransaction } from "@/actions/transactions";
import { toast } from "sonner";

type Props = {
  categories?: Prisma.CategoryGetPayload<{ include: { budgetItems: true } }>[];
  accounts?: BankAccount[];
};

export default function AddNewTransaction({ categories, accounts }: Props) {
  const [isOpen, setOpen] = React.useState(false);

  const [transactionType, setTransactionType] =
    React.useState<TransactionType>("OUTFLOW");
  const form = useForm();
  const onSubmit = async (data: any) => {
    const res = await createTransaction({
      amount: data.amount,
      accountId: data.accountId,
      budgetItemId: data.budgetItemId,
      date: new Date(),
      type: transactionType,
      description: data.description,
    });
    if (res) {
      form.reset();
      toast.success("Transaction added successfully", {
        position: "top-center",
      });
      setOpen(false);
    }
    console.log(res);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger className="h-10 rounded-sm bg-blue-500 px-2 text-white">
        <div className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Transaction
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>New Transaction</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-between rounded-3xl bg-gray-400">
              <div
                onClick={() => setTransactionType("OUTFLOW")}
                className={cn(
                  "w-1/2 rounded-3xl py-2 text-center transition-all duration-200 ease-in",
                  {
                    "bg-red-500 text-white": transactionType === "OUTFLOW",
                  },
                )}
              >
                - Outflow
              </div>
              <div
                onClick={() => setTransactionType("INFLOW")}
                className={cn("w-1/2 rounded-3xl py-2 text-center", {
                  "bg-green-500 text-white": transactionType === "INFLOW",
                })}
              >
                + Inflow
              </div>
            </div>
            {/* Amount field */}
            <div className="flex justify-center">
              <div>
                {transactionType === "OUTFLOW" ? (
                  <span className="text-xl text-red-500">-</span>
                ) : (
                  <span className="text-xl text-green-500">+</span>
                )}
              </div>
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex justify-center">
                    <input
                      defaultValue={0}
                      className={cn(
                        "text-center text-xl focus-within:outline-none",
                        {
                          "text-red-500 placeholder:text-red-300":
                            transactionType === "OUTFLOW",
                          "text-green-500 placeholder:text-green-300":
                            transactionType === "INFLOW",
                        },
                      )}
                      min={0}
                      placeholder="0.00"
                      type="number"
                      {...field}
                    />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                name="budgetItemId"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories &&
                          map(categories, (cat) => (
                            <div>
                              <SelectGroup className="capitalize">
                                {cat.name}
                              </SelectGroup>
                              {map(cat.budgetItems, (item) => (
                                <SelectItem value={item.id}>
                                  {item.name}
                                </SelectItem>
                              ))}
                            </div>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            {/* Pick a Bank Account */}
            <FormField
              name="accountId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Bank Account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts &&
                        map(accounts, (account) => (
                          <SelectItem value={account.id}>
                            <div className="flex w-96 justify-between">
                              <h1> {account.name}</h1>
                              <h1>{account.working_balance}</h1>
                            </div>
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {/* Pick date of transaction */}
            <FormField
              name="date"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Pick date" type="date" {...field} />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Textarea placeholder="Memo" {...field} />
                </FormItem>
              )}
            />
            <div className="">
              <Button type="submit">Add Transaction</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
