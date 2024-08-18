"use client";
import { usePathname } from "next/navigation";
import React from "react";

type PropType = {
  params: {
    id: string;
  };
};
const RikkeiAcademy = (props: PropType) => {
  const { id }: { id: string } = props.params;
  return (
    <div>
      <h2 className="Bài 4"></h2>
      <p className="inline">Company name: {id}</p>
    </div>
  );
};

export default RikkeiAcademy;
