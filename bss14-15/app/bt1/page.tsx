import axios, { AxiosResponse } from "axios";
import React from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};

const Ssr: React.FC = async () => {
  const posts = await fetchData();
  return (
    <div>
      <h2 className="text-[20px] font-[700]">List of posts</h2>
      {posts.map((item: any) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
};

export default Ssr;
