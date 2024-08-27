import axios, { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const res: AxiosResponse = await axios.get(
    "https://fakestoreapi.com/products"
  );
  return NextResponse.json(res.data);
};

export const POST = async (req: NextRequest) => {
  try {
    const newProduct = await req.json();
    const res: AxiosResponse = await axios.post(
      "https://fakestoreapi.com/products",
      newProduct
    );
    return NextResponse.json(res.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Thêm sản phẩm thất bại" },
      { status: 500 }
    );
  }
};
