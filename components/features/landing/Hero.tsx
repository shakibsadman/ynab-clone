import SignupBtn from "@/components/ui/signup-btn";
import React from "react";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className=" bg-blue-600 text-white min-h-[90vh]">
      <div className="xl:max-w-screen-xl mx-auto pt-40">
        <div className="flex">
          {/* Hero left */}
          <div className="">
            <h1 className="lg:text-6xl font-semibold mb-5">
              Do Money <br /> Differently
            </h1>
            <p className="w-80">
              Enjoy guilt-free spending and effortless saving with a friendly,
              flexible method for managing your finances.
            </p>
            {/* Signup Button */}
            <div className="mt-5">
              <SignupBtn />
            </div>
          </div>
          {/* Hero right */}
          <div>
            <Image src={"/hero-phone.png"} alt="" height={600} width={400} />
          </div>
          {/* Hero right ends */}
        </div>
      </div>
    </section>
  );
}
