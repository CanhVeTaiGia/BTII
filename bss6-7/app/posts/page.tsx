"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Posts: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const searchParam = useSearchParams();
  const handleClick = () => {
    router.push(`/posts/?search=${encodeURIComponent(search)}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
        <h1>Search Value: {searchParam.get('search')}</h1>
      <input
        onChange={handleChange}
        type="text"
        className="w-[240px] h-[30px] rounded-[5px] border-[1px] border-black"
        id="input"
      />
      <button className=" p-[3px] border-[1px] ml-[10px]" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Posts;
