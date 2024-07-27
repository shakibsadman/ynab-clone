"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus } from "lucide-react";
import { addCategory } from "@/actions/budget/categories";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {};

const AddCategorySchema = z.object({
  name: z.string(),
});

export default function AddCategory({}: Props) {
  const [isOpen, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof AddCategorySchema>>({
    resolver: zodResolver(AddCategorySchema),
  });
  const onSubmit = async (data: z.infer<typeof AddCategorySchema>) => {
    const res = await addCategory(data.name.toLowerCase());
    if (res?.success) {
      toast.success(res.message);
      setOpen(false);
      reset();
    }
  };
  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger>
        <div className="flex items-center gap-3">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
            <Plus className="h-3 w-3" />
          </div>
          Category
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("name")} />
          <div className="mt-3 flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Done</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
