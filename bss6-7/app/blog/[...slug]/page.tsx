import React from "react";

interface PropType {
  params: {
    slug: [];
  };
}
const BlogDetail: React.FC<PropType> = (props) => {
  const { slug } = props.params;
  return <div>Bạn đang xem blog với đường dẫn {slug.join("/")}</div>;
};

export default BlogDetail;
