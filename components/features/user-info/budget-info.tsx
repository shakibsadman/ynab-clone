"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Drawer, DrawerContent } from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import BudgetStatus from "./budget-status";

import SelectPerson from "./select-person";
import SelectHome from "./select-home";
import DebtStatus from "./debt-status";
import Transport from "./transport";
import RegularSpend from "./regular-spend";
import SneakExpense from "./sneak-expense";
import Saving from "./saving";
import Subcribtions from "./subcriptions";
import ExtraSpend from "./extra-spend";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";

type Props = {};

export default function BudgetInfo({}: Props) {
  const [isOpen, setOpen] = React.useState(true);
  const [fStatus, setStatus] = React.useState("");

  const { current_step, nextStep, prevStep, canProceed } = useBudgetStore();

  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerContent className="mx-5 h-[550px] px-3 pb-8">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{
                width: `${((current_step + 1) / 9) * 100}%`,
              }}
            ></div>
          </div>
          <div className="h-full p-5">
            {current_step === 1 && <BudgetStatus />}
            {current_step === 2 && <SelectPerson />}
            {current_step === 3 && <SelectHome />}
            {current_step === 4 && <DebtStatus />}
            {current_step === 5 && <Transport />}
            {current_step === 6 && <RegularSpend />}
            {current_step === 7 && <SneakExpense />}
            {current_step === 8 && <Subcribtions />}
            {current_step === 9 && <Saving />}
            {current_step === 10 && <ExtraSpend />}
          </div>
          <div className="flex w-full justify-end">
            {current_step > 1 && <Button onClick={prevStep}>Back</Button>}
            <Button
              disabled={!canProceed}
              onClick={nextStep}
              variant="secondary"
            >
              Continue
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
