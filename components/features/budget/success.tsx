import React from "react";
import { Check } from "lucide-react";

type Props = {};

export default function Success({}: Props) {
  return (
    <div className="w-50 h-40 rounded-full bg-green-500">
      <Check />
    </div>
  );
}
