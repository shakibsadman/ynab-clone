"use client";

import React from "react";
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
type Props = {};

export default function AddNewTransaction({}: Props) {
  const [isOpen, setOpen] = React.useState(false);
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
        <div className="">
          <div className="flex justify-between rounded-3xl bg-gray-400">
            <div className="w-1/2 rounded-3xl bg-gray-300 py-2 text-center">
              - Outflow
            </div>
            <div className="w-1/2 rounded-3xl py-2 text-center">+ Inflow</div>
          </div>
          <div className="flex justify-center py-3">
            $
            <input className="text-center" placeholder="0.00" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
