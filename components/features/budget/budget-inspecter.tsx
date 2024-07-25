"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import useBudgetInspector from "@/hooks/zustand/use-budget-inspector";
import { Pencil } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion-base";
import { Button } from "@/components/ui/button";

type Props = {};

export default function BudgetInspector({}: Props) {
  const { setSelectedItem, selectedItem } = useBudgetInspector();
  return (
    <div className="w-96 px-3 py-3">
      <div className="mb-3 flex justify-between">
        <h1 className="front-semibold text-xl capitalize">
          {selectedItem?.name}
        </h1>
        <Pencil className="" />
      </div>
      {/* budget inspector header */}
      <ScrollArea className="h-[80vh]">
        <div className="">
          <div className="">
            <div className="mb-3 flex justify-between rounded-md bg-white p-2 shadow-sm">
              <h1>Available</h1>
              <div className="rounded-xl bg-gray-200 px-3">
                <span>{selectedItem?.available}</span>
              </div>
            </div>
          </div>
          {/* Target starts */}
          <div className="mb-3 rounded-md bg-white p-2 shadow-sm">
            <Accordion className="" type="single" collapsible>
              <AccordionItem className="border-0" value="target">
                <AccordionTrigger className="hover:no-underline">
                  <h1>Target</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    <p>
                      When you create a target, we’ll let you know how much
                      money to set aside to stay on track over time.
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-3 bg-gray-100 text-blue-500"
                    >
                      Create target
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Target ends */}
          <Card>
            <CardContent>
              <h1>Notes</h1>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
