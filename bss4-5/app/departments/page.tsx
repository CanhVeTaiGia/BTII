import React from "react";
import { departments } from "./List";

const Departments = () => {
  return (
    <div>
      <h2>Bài 10</h2>
      <ul className="list-item">
        {departments.map((item: any) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Departments;
