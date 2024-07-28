import React from "react";
import { map } from "underscore";

import BudgetGroup from "./budget-group";
import BudgetItem from "./budget-item";
import AddCategory from "./add-category";
import { Category, Prisma } from "@prisma/client";

type Props = {
  categories: Prisma.CategoryGetPayload<{ include: { budgetItems: true } }>[];
};

export default function BudgetTable({ categories }: Props) {
  return (
    <div className="w-full bg-white">
      {/* budget table header */}
      <div className="border-b px-5 py-2">
        <AddCategory />
      </div>
      <div className="flex h-10 w-full items-center">
        <div className="flex w-full gap-3 pl-3">
          <input type="checkbox" />
          <div className="flex w-2/5">
            <span className="uppercase">Categroy</span>
          </div>
          <div className="w-1/5 text-center">
            <span> Assigned</span>
          </div>
          <div className="w-1/5 text-center">
            <span>Available</span>
          </div>
        </div>
      </div>
      {/* budget table body */}

      <div className="">
        {map(categories, (category) => {
          return (
            <BudgetGroup
              categoryId={category.id}
              key={category.id}
              title={category.name}
            >
              <div>
                {map(category.budgetItems, (item) => {
                  return (
                    <div className="flex px-3 py-1" key={item.id}>
                      <input type="checkbox" />
                      <div className="w-2/5">
                        <h1 className="pl-2">{item.name}</h1>
                      </div>
                      <div className="">{item.assigned}</div>
                      <div className="">{item.available}</div>
                    </div>
                  );
                })}
              </div>
            </BudgetGroup>
          );
        })}
      </div>
    </div>
  );
}
