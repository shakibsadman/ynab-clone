import React from "react";
import { Plus, BarChart } from "lucide-react";
import LinkItem from "./link-item";

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
    <aside className="min-h-screen w-80 bg-[#2c396a] px-3 py-4 text-white">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full py-2">
          <div className="text-left">
            <h1 className="font-semibold"> Sadman Shakib Budget</h1>

            <p className="text-xs text-gray-300">sm.shakib007@gmail.com</p>
          </div>
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
          <LinkItem href="/budget">💷 Budget</LinkItem>
          <li className="flex gap-1 p-2">
            <BarChart /> Reflect
          </li>
          <li className="p-2">🏦 All Accounts</li>
        </ul>
      </div>

      <div className="">
        <Accounts accounts={accounts} />
        <AddAccount />
      </div>
    </aside>
  );
}
