"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { boolean } from "zod";

type Props = {
  text: string;
  onClick: () => void;
  selected: boolean;
};

export default function StatusBtn({ text, onClick, selected }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn("w-96 rounded-md bg-gray-100 p-4 text-left", {
        "bg-gray-200": selected,
      })}
    >
      <span>{text}</span>
      <span className="float-right">
        {selected ? <Check className="text-green-500" /> : null}
      </span>
    </button>
  );
}
