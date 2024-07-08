import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-[#19223c] h-16 xl:h-18 flex items-center ">
      <div className=" max-w-screen-xl mx-auto w-full flex justify-between items-center ">
        <Image
          src="/ynab.png"
          className="h-4 xl:h-6 xl:w-24 w-14"
          height={500}
          width={800}
          alt="logo"
        />
        <nav className="text-white">
          <ol>What is SYAB?</ol>
        </nav>
        <div className="flex gap-3">
          <Button
            variant="ghost"
            className="border-2 rounded-md border-white text-white h-11 bg-transparent hover:border-blue-500 hover:text-blue-500 hover:bg-transparent"
          >
            Log in
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600 h-11"
            variant="ghost"
          >
            Start Your Free Trail
          </Button>
        </div>
      </div>
    </header>
  );
}
