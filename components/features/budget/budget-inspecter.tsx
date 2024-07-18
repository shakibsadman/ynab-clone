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
} from "@/components/ui/accordion";

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
            <div className="mb-3 rounded-md bg-white p-2 shadow-sm">
              <h1>
                Available <span>{selectedItem?.available}</span>
              </h1>
            </div>
          </div>
          <Card className="mb-6">
            <CardContent>
              <h1>Target</h1>
            </CardContent>
          </Card>
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
