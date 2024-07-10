"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FinanceStatus } from "@/data/constants";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import StatusBtn from "./statusbtn";

type Props = {};

export default function InfoForm({}: Props) {
  const [isOpen, setOpen] = React.useState(true);
  const [fStatus, setStatus] = React.useState("");
  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerContent className="h-[500px]">
          <div className="">
            <DrawerHeader>
              <DrawerTitle>
                How do you feel about your finances today?
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-2">
              {FinanceStatus.map((status) => (
                <StatusBtn
                  onClick={() => setStatus(status.value)}
                  selected={fStatus === status.value}
                  text={status.text}
                  key={status.id}
                />
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
