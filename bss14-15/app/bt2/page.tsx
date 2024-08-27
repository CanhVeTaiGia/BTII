import axios, { AxiosResponse } from "axios";
import React from "react";

const fetchData = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

const Axios: React.FC = async () => {
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

export default Axios;
