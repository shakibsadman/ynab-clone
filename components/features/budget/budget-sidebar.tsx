import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

export default function BudgetSidebar({}: Props) {
  return (
    <aside className="min-h-screen w-60 bg-[#19223c] px-3 py-4 text-white">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full py-2">
          Sadman Shakib Budget
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="">
        <ul>
          <li>Budget</li>
          <li>All Accounts</li>
          <li>Reports</li>
        </ul>
      </div>
    </aside>
  );
}
