"use client";
import React from "react";
import { format } from "date-fns";

type Props = {};

export default function BudgetHeader({}: Props) {
  const now = new Date();
  return (
    <div className="py-3">
      <div className="">
        <h1 className="text-xl font-bold">{format(now, "MMM yyyy")}</h1>
      </div>
      <div className="rounded-md bg-green-200"></div>
    </div>
  );
}
