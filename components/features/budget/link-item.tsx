"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function LinkItem({ href, children }: Props) {
  const path = usePathname();
  return (
    <Link
      className={cn("flex gap-1 p-2", {
        "rounded-md bg-blue-100/10": path === href,
      })}
      href={href}
    >
      {children}
    </Link>
  );
}
