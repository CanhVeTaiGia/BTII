"use client";
import useSWR from "swr";
import axios from "axios";
import React from "react";

interface RatingType {
  rate: number;
  count: number;
}

interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: RatingType;
}

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

const RouteHandlers = () => {
  const { data, error }: { data: any; error: any } = useSWR<ProductType[]>(
    "http://localhost:3000/api/products",
    fetcher
  );

  if (!data && !error)
    return (
      <div className="w-full flex justify-center pt-[20px] items-center text-[100px]">
        Loading ...
      </div>
    );

  if (error)
    return (
      <div className="w-full flex justify-center pt-[20px] items-center text-[100px]">
        Lỗi, {error}.
      </div>
    );

  return (
    <>
      <table className="w-[100%]">
        <thead>
          <tr>
            <th className="px-[10px] border-[1px] w-[4%] border-black">STT</th>
            <th className="px-[10px] border-[1px] w-[50%] border-black">
              Tiêu đề
            </th>
            <th className="px-[10px] border-[1px] border-black">Giá</th>
            <th className="px-[10px] border-[1px] border-black">Loại</th>
            <th className="px-[10px] border-[1px] border-black">Ảnh</th>
            <th className="px-[10px] border-[1px] border-black">Đánh giá</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: ProductType) => (
            <tr key={item.id}>
              <td className="text-center font-[600] px-[10px] border-[1px] border-black">
                {item.id}
              </td>
              <td className="text-center font-[600] px-[10px] border-[1px] border-black">
                {item.title}
              </td>
              <td className="text-center font-[600] px-[10px] border-[1px] border-black">
                {item.price}$ USD
              </td>
              <td className="text-center font-[600] px-[10px] border-[1px] border-black">
                {item.category}
              </td>
              <td className="text-center font-[600] px-[10px] border-[1px] border-black">
                <img
                  src={item.image}
                  className="rounded-[5px] w-[80px] h-[80px]"
                  alt={item.title}
                />
              </td>
              <td className="font-[600] text-center border-[1px] border-black">
                <button className="px-[5px] mr-[5px] h-[40px] border-[1px] border-[black]">
                  Đánh giá: {item.rating.rate}
                </button>
                <button className="px-[5px] h-[40px] border-[1px] border-[black]">
                  Số lượng: {item.rating.count}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RouteHandlers;
