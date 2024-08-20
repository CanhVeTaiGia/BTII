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
            <li key={blog.id}>
              <img
                src={blog.image}
                alt={blog.title}
                style={{ width: "200px" }}
              />
              <h2>{blog.title}</h2>
              <Link href={`/blogs/${encodeURIComponent(blog.title)}`}>
                <button>Xem chi tiết</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
