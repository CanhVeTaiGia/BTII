import React from "react";

type PropTypes = {
  params: {
    id: string;
  };
};

const Id = (props: PropTypes) => {
  const { id }: { id: string } = props.params;
  return (
    <div>
      <h2>Bài 3</h2>
      <p>Product id: {id}</p>
    </div>
  );
};

export default Id;
