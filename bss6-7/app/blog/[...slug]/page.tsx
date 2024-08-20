"use client";
import React from "react";
import { blogs } from "../BlogData";
import { useSearchParams } from "next/navigation";

interface PropType {
  params: {
    slug: [];
  };
}
const BlogDetail: React.FC<PropType> = (props) => {
  const searchParam = useSearchParams();
  const { slug } = props.params;
  const decodedPath = decodeURIComponent(slug.join(""));
  console.log(decodedPath);

  return (
    <div>
      {blogs.map((blog) => {
        return blog.title === decodedPath ? (
          <ul className="w-[250px] p-[5px]" key={blog.id}>
            <li>
              <img className="size-[100%]" src={blog.image} alt="" />
            </li>
            <li>ID: {blog.id}</li>
            <li>Tiêu đề: {blog.title}</li>
          </ul>
        ) : null;
      })}
    </div>
  );
};

export default BlogDetail;
