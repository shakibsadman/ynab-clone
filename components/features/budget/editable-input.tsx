"use client ";
import React, { useState } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface EditableInputProps {
  name: string;

  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions;
  value: string | number;
  prefix?: string;
}

export const EditableInput: React.FC<EditableInputProps> = ({
  name,

  register,
  rules,
  value,
  prefix = "$",
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="relative">
      {isEditing ? (
        <input
          id={name}
          type="text"
          {...register(name, rules)}
          defaultValue={value}
          className="block w-32 rounded-md border border-gray-300 bg-white px-3 py-1 text-right shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div
          onClick={handleClick}
          className="block w-full cursor-pointer rounded-md border border-transparent px-3 py-1 text-right hover:border-blue-100 hover:bg-gray-100 sm:text-sm"
        >
          <span className="pr-1">{prefix}</span>
          {value}
        </div>
      )}
    </div>
  );
};
