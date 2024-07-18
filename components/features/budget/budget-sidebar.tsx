import React from "react";
import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddAccount from "./add-accuont";
import Accounts from "./accounts";
import { getUserAccounts } from "@/actions/account";

type Props = {};

export default async function BudgetSidebar({}: Props) {
  const accounts = await getUserAccounts();
  return (
    <aside className="min-h-screen w-80 bg-[#19223c] px-3 py-4 text-white">
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
          <li className="p-2">Budget</li>
          <li className="p-2">All Accounts</li>
          <li className="p-2">Reports</li>
        </ul>
      </div>

      <div className="">
        <Accounts accounts={accounts} />
        <AddAccount />
      </div>
    </aside>
  );
}
