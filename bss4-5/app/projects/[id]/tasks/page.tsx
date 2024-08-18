import React from "react";

interface PropType {
  params: {
    id: string;
  };
}
const Tasks = (props: PropType) => {
  const { id }: { id: string } = props.params;
  return (
    <div>
      <h2>Bài 8</h2>
      <p>Danh sách nhiệm vụ của dự án có Id : {id}</p>
    </div>
  );
};

export default Tasks;
