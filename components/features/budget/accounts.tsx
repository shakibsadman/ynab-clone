"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { BankAccount } from "@prisma/client";

type Props = {
  accounts?: BankAccount[];
};

export default function Accounts({ accounts }: Props) {
  return (
    <div className="pt-3">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="">
              <h1 className="uppercase">Budget</h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <pre>{JSON.stringify(accounts, null, 2)}</pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
