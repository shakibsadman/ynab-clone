"use client";
import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { addBudgetItem } from "@/actions/budget/budget-item";
import { toast } from "sonner";

type Props = {
  categoryId: string;
};

const BudgetItemShcema = z.object({
  name: z.string(),
});

type TBudgetItemForm = z.infer<typeof BudgetItemShcema>;

export default function AddBudgetItem({ categoryId }: Props) {
  const [isOpen, setOpen] = React.useState(false);
  const { register, handleSubmit, reset } = useForm<
    z.infer<typeof BudgetItemShcema>
  >({
    resolver: zodResolver(BudgetItemShcema),
  });
  const onSubmit = async (data: TBudgetItemForm) => {
    const res = await addBudgetItem(data.name, categoryId);
    if (res?.success) {
      toast.success("Budget Item added successfully");
      reset();
      setOpen(false);
    }
  };
  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="absolute left-24 top-2 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
          <Plus className="h-3 w-3" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <Input {...register("name")} />
          <div className="mt-3 flex justify-end gap-4">
            <Button>Cancel</Button>
            <Button>Save</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
