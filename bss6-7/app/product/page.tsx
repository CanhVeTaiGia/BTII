"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Product = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    name: "",
    category: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleClick = () => {
    router.push(
      `/product/?name=${inputValue.name}&category=${inputValue.category}`
    );
    setInputValue({
      name: "",
      category: "",
    });
  };
  return (
    <div className="pl-[10px] pt-[10px] flex flex-col gap-[10px]">
      <h1 className="text-[20px] font-[700]">Tên sản phẩm: {searchParam.get('name')}</h1>
      <h1 className="text-[20px] font-[700]">Danh mục: {searchParam.get('category')}</h1>
      <input
        name="name"
        placeholder="Tìm kiếm theo tên"
        onChange={handleChange}
        type="text"
        className="pl-[10px] w-[240px] h-[30px] border-black border-[1px]"
      />
      <input
        name="category"
        placeholder="Tìm kiếm theo danh mục"
        onChange={handleChange}
        type="text"
        className="pl-[10px] w-[240px] h-[30px] border-black border-[1px]"
      />
      <button
        onClick={handleClick}
        className="w-[120px] h-[30px] text-white bg-black"
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default Product;
