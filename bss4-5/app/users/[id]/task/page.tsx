'use client'
import { usePathname } from "next/navigation";
import React from "react";

type PropType = {
    params: {
      id: string
    }
  }
const Task = (props: PropType) => {
  const pathName = usePathname();
  const {id}: {id: string} = props.params;
  return (
    <div>
      <h2>Bài 7</h2>
      <p>Danh sách bài viết của User Id: {id}</p>
    </div>
  );
};

export default Task;
