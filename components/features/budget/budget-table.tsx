import React from "react";
import { Item } from "@prisma/client";
import { GroupedBudgetItems } from "@/types/items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  items?: GroupedBudgetItems;
};

export default function BudgetTable({ items }: Props) {
  return (
    <div>
      {/* budget table header */}
      <div className="flex h-10 items-center px-5">
        <div className="flex">
          <input type="checkbox" />
          <span className="uppercase">Categroy</span>
        </div>
        <div className="w-40 text-center">
          <span> Assigned</span>
        </div>
        <div>
          <span>Available</span>
        </div>
      </div>
      {/* budget table body */}
      {items && (
        <div className="px-5">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-full rounded-sm bg-blue-100 px-2">
                <div className="flex gap-5">
                  <input type="checkbox" />
                  <h1>
                    <span>Bills</span>
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="">
                  {items.bills.map((item) => (
                    <div key={item.id}>
                      <div className="flex gap-3">
                        <input type="checkbox" className="" />
                        <h1>{item.name}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Needs */}
          <div className="">
            <h1>
              <input type="checkbox" />
              Needs
            </h1>
            <div className="">
              {items.needs.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
          </div>
          {/* Wants */}
          <div className="">
            <h1>
              <input type="checkbox" />
              Wants
            </h1>
            <div className="">
              {items.wants.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
