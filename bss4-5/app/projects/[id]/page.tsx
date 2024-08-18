import React from "react";

interface PropsType {
  params: {
    id: string;
  };
}
const ProductDetail = (props: PropsType) => {
  const { id }: { id: string } = props.params;
  return (
    <div>
      <h2>Bài 8</h2>
      <p>Trang chi tiết dự án có Id: {id}</p>
    </div>
  );
};

export default ProductDetail;
