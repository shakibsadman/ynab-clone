import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default async function Header() {
  return (
    <header className="xl:h-18 flex h-16 items-center bg-[#19223c]">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <Image
          src="/ynab.png"
          className="h-4 w-14 xl:h-6 xl:w-24"
          height={500}
          width={800}
          alt="logo"
        />
        <nav className="text-white">
          <ol>What is SYAB?</ol>
        </nav>
        <div className="flex gap-3">
          <Link href="/auth/login">
            <Button
              variant="ghost"
              className="h-11 rounded-md border-2 border-white bg-transparent text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
            >
              Log in
            </Button>
          </Link>
          <Button
            className="h-11 bg-green-500 hover:bg-green-600"
            variant="ghost"
          >
            Start Your Free Trail
          </Button>
        </div>
      </div>
    </header>
  );
}
