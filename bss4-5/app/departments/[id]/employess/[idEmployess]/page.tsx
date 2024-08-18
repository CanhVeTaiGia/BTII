"use client";
import React from "react";

interface PropType {
  params: {
    id: string;
  };
}
const Employees = (props: PropType) => {
  const { id }: { id: string } = props.params;
  console.log(id);
  return (
    <div>
      <h2>Bài 10</h2>
    </div>
  );
};

export default Employees;
