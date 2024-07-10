import { Button } from "./button";

import React from "react";

type Props = {};

export default function SignupBtn({}: Props) {
  return (
    <Button variant="ghost" className="bg-green-500 hover:bg-green-600 h-12">
      Start Your Free Trail
    </Button>
  );
}
