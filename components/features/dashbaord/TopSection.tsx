"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

type Props = {};

export default function TopSection({}: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => await fetch("http://localhost:3000/api/posts"),
  });
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
