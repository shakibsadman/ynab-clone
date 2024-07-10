import React from "react";
import { FinanceStatus } from "@/data/constants";
import { cn } from "@/lib/utils";
import StatusBtn from "./statusbtn";

type Props = {
  fStatus: string;
  setStatus: (status: string) => void;
};

export default function SelectStatus({ fStatus, setStatus }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="mb-2 text-xl font-semibold">
        How do you feel about your finances today?
      </h1>
      {FinanceStatus.map((status) => (
        <StatusBtn
          onClick={() => setStatus(status.value)}
          selected={fStatus === status.value}
          text={status.text}
          key={status.id}
        />
      ))}
    </div>
  );
}
