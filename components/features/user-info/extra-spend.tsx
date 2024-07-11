import React from "react";
import Title from "./title";
import { map } from "underscore";

const extraList = [
  "Dining Out",
  "Charity",
  "My spending money",
  "Entertainment",
  "Gift",
  "Their spending money",
  "Video games",
  "Home decor",
  "Hobbies",
  "Clebrations",
];

type Props = {};

export default function ExtraSpend({}: Props) {
  return (
    <div>
      <Title>
        ❣️ What else do you want to include - without stress or guilt?
      </Title>
      <h3 className="mb-3 text-center">Last question, We promise!</h3>
      <div className="mx-auto grid max-w-screen-xl grid-cols-3 place-content-center place-items-center gap-2">
        {map(extraList, (s) => (
          <button
            key={s}
            className="mb-2 flex w-96 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
