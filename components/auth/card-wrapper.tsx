"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import Image from "next/image";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  title?: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  title,
}: CardWrapperProps) => {
  return (
    <div className="relative h-screen w-screen bg-[#3B5EDA]">
      <Image
        className="absolute left-0 top-0"
        src="/bg-shape.svg"
        fill
        alt="background"
      />
      <div className="flex w-full items-center justify-center gap-10 pt-20">
        {/* Left side */}
        <div className="z-30">
          <h1 className="mb-5 text-3xl font-semibold text-white">
            Do money differently!
          </h1>
          <p className="text-gray-200">
            YNAB has helped millions learn to spend, save, and live joyfully{" "}
            <br />
            with a simple set of life-changing habits.
          </p>
        </div>
        <Card className="relative z-50 w-[400px] shadow-md">
          <CardHeader>
            <Header title={title} label={headerLabel} />
          </CardHeader>
          <CardContent>{children}</CardContent>
          {showSocial && (
            <CardFooter>
              <Social />
            </CardFooter>
          )}
          <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
