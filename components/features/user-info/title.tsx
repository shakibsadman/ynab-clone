import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <h1 className="mb-5 text-center text-xl font-semibold">{children}</h1>;
}
