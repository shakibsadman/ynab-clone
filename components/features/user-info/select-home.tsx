import React from "react";

type Props = {};

export default function SelectHome({}: Props) {
  const [selectedOption, setSelectedOption] = React.useState("");
  return (
    <div>
      <h1 className="mb-3 text-center text-xl font-medium">
        🏠 Tell us about your home?
      </h1>
      <div className="mx-auto flex max-w-sm flex-col gap-3">
        <button
          onClick={() => setSelectedOption("rent")}
          className="rounded-md bg-gray-100 p-4"
        >
          I rent
        </button>
        <button
          onClick={() => setSelectedOption("own")}
          className="rounded-md bg-gray-100 p-4"
        >
          I own
        </button>
        <button
          onClick={() => setSelectedOption("others")}
          className="rounded-md bg-gray-100 p-4"
        >
          Other
        </button>
      </div>
    </div>
  );
}
