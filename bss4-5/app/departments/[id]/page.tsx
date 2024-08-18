import React from "react";
import { departments } from "../List";

interface PropType {
  params: {
    id: string;
  };
}
const DepartmentDetail = (props: PropType) => {
  const { id }: { id: string } = props.params;
  return (
    <div>
      <h2>Bài 10</h2>
      {departments.map((item: { id: number; name: string }) => {
        return item.id === parseInt(id) ? (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.name}</li>
          </ul>
        ) : null;
      })}
    </div>
  );
};

export default DepartmentDetail;
