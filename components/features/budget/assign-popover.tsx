"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { map } from "underscore";
import type { GroupedBudgetItems } from "@/types/items";
import { assignAmount } from "@/actions/budget/assign";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Prisma } from "@prisma/client";
import { toast } from "sonner";

type Props = {
  categories?: Prisma.CategoryGetPayload<{ include: { budgetItems: true } }>[];
};

export default function AssignPopover({ categories }: Props) {
  const [isOpen, setOpen] = React.useState(false);
  const form = useForm();
  const onSumbit = async (data: any) => {
    const res = await assignAmount(data.budgetItemId, Number(data.amount));

    if (res) {
      toast.success("Successfully assigned", {
        position: "top-center",
        className: "bg-green-500",
      });
      form.reset();
      setOpen(false);
    }
  };
  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          Assign
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSumbit)} className="">
            <div className="">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <h1 className="mb-2">Amount</h1>
                    <Input type="number" {...field} />
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
                    <h1 className="mb-2">Assign to</h1>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="">
                        {categories &&
                          map(categories, (ca) => {
                            return (
                              <SelectGroup key={ca.id}>
                                <SelectLabel className="capitalize">
                                  {ca.name}
                                </SelectLabel>
                                {map(ca.budgetItems, (item) => {
                                  return (
                                    <SelectItem key={item.id} value={item.id}>
                                      {item.name}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            );
                          })}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-4 flex w-full justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Assign</Button>
            </div>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
