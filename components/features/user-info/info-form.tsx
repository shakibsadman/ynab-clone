"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FinanceStatus } from "@/data/constants";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import SelectStatus from "./select-status";
import SelectPerson from "./select-person";
import SelectHome from "./select-home";
import DebtStatus from "./debt-status";
import Transport from "./transport";
import RegularSpend from "./regular-spend";
import SneakExpense from "./sneak-expense";

type Props = {};

export default function InfoForm({}: Props) {
  const [isOpen, setOpen] = React.useState(true);
  const [fStatus, setStatus] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState(6);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerContent className="mx-5 h-[550px] px-3 pb-8">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{
                width: `${((currentStep + 1) / 10) * 100}%`,
              }}
            ></div>
          </div>
          <div className="h-full p-5">
            {currentStep === 0 && (
              <SelectStatus fStatus={fStatus} setStatus={setStatus} />
            )}
            {currentStep === 1 && <SelectPerson />}
            {currentStep === 2 && <SelectHome />}
            {currentStep === 3 && <DebtStatus />}
            {currentStep === 4 && <Transport />}
            {currentStep === 5 && <RegularSpend />}

            {currentStep === 6 && <SneakExpense />}
          </div>
          <div className="flex w-full justify-end">
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
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
