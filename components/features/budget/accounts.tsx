"use client";
import React from "react";
import { Pen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { BankAccount } from "@prisma/client";
import { map } from "underscore";

type Props = {
  accounts?: BankAccount[];
};

export default function Accounts({ accounts }: Props) {
  //calculate total working_balance from all the accounts
  const total_balance = accounts?.reduce(
    (acc, account) => acc + account.working_balance,
    0,
  );
  return (
    <div className="pt-3">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex w-full justify-between">
              <h1 className="uppercase">Budget</h1>
              <p>$ {total_balance}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {accounts &&
              map(accounts, (account) => (
                <div
                  className="group flex items-center justify-between rounded-md px-3 py-2 transition-all duration-200 hover:bg-[#374d9b]"
                  key={account.id}
                >
                  <div className="flex items-center gap-2">
                    <Pen className="invisible h-5 w-4 text-gray-300 hover:text-white group-hover:visible" />
                    <h3> {account.name}</h3>
                  </div>
                  <p>$ {account.working_balance}</p>
                </div>
              ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
