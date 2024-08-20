import React from "react";
import { blogs } from "./BlogData";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <div>
        <h1>Danh sách bài viết</h1>
        <ul>
          {blogs.map((blog) => (
            <li
              className="border-[2px] mr-[10px] items-center flex-col w-[250px] h-[200px] p-[10px] inline-flex"
              key={blog.id}
            >
              <img
                className="size-[250px]"
                src={blog.image}
                alt={blog.title}
                style={{ width: "200px" }}
              />
              <h2>{blog.title}</h2>

              <Link href={`/blog/${encodeURIComponent(blog.title)}`}>
                <button className="p-[2px] border-[1px]">Xem chi tiết</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
