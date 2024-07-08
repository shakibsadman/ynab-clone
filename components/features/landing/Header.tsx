import Image from "next/image";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-[#19223c] h-16 xl:h-20 flex items-center ">
      <div className=" max-w-screen-xl mx-auto w-full ">
        <Image
          src="/ynab.png"
          className="h-4 xl:h-6 xl:w-20 w-14"
          height={500}
          width={800}
          alt="logo"
        />
        <div className=""></div>
      </div>
    </header>
  );
}
