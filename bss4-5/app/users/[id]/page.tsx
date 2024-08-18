'use client'
import { usePathname } from "next/navigation";
import React from "react";

type PropType = {
  params: {
    id: string
  }
}
const Id = (props: PropType) => {
  const {id}: {id: string} = props.params;
  return (
    <div>
      <h2>Bài 7</h2>
      User id: {id}
    </div>
  );
};

export default Id;
