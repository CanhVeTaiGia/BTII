import React from "react";
import { blogs } from "../BlogData";
import { useRouter } from "next/router";

interface PropType {
  params: {
    slug: [];
  };
}
const BlogDetail: React.FC<PropType> = (props) => {
  const router = useRouter();
  const { title } = router.query;
  const blog = blogs.find((b) => b.title === title);

  if (!blog) {
    return <div>Bài viết không tồn tại</div>;
  }
  const { slug } = props.params;
  return (
    <div>
      Bạn đang xem blog với đường dẫn {slug.join("/")}
      <div>
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} style={{ width: "400px" }} />
        <p>Chi tiết bài viết sẽ nằm ở đây.</p>
        <button onClick={() => router.back()}>Quay lại</button>
      </div>
    </div>
  );
};

export default BlogDetail;
