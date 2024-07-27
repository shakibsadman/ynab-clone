"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { map } from "underscore";
import type { GroupedBudgetItems } from "@/types/items";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";

type Props = {
  items?: GroupedBudgetItems;
};

export default function AssignPopover({ items }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          Assign
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="">
          <div className="">
            <h1 className="mb-2">Amount</h1>
            <Input />
          </div>
          <div className="">
            <h1 className="mb-2">Assign to</h1>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  <SelectLabel>Bills</SelectLabel>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Needs</SelectLabel>
                </SelectGroup>
                <SelectGroup className="">
                  <SelectLabel>Wants</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 flex w-full justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Assign</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
