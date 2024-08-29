"use client";
import React from "react";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { Metadata } from "next";

const getPosts = async (url: string) => {
  const res: AxiosResponse = await axios.get(`${url}`);
  return res.data;
};

const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "bài viết",
  keywords: "post",
};

interface Posts {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const Posts = () => {
  const { data, error } = useSWR("http://localhost:3000/api/posts", getPosts);

  if (error) return <div>Lỗi</div>;

  if (!data) return <div>Loading</div>;

  return (
    <div className="w-full h-[100vh] flex justify-center pt-[20px]">
      <div className="w-[70%] flex gap-[10px] flex-wrap">
        {data.map((item: any) => {
          return (
            <div
              key={item.id}
              className="w-[300px] h-[400px] inline border-[1px] bg-[#0e82ff]"
            >
              <Image
                loading="lazy"
                width={150}
                height={150}
                className="w-[300px] h-[300px]"
                src={item.thumbnailUrl}
                alt={item.title}
              ></Image>
              <p className="p-[10px] text-center">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
