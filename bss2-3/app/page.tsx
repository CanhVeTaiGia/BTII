import B1 from "@/components/B1";
import Image from "next/image";
import B2 from "../components/B2";
import B3 from "@/components/B3";
import B4 from "@/components/B4";
import B5 from "@/components/B5";
import B6 from "@/components/B6";
import B7 from "@/components/B7";
import B8 from "@/components/B8";
import B9 from "@/components/B9";
import B10 from "@/components/B10";
import B11 from "@/components/B11";
import Head from "next/head";
import B12 from "@/components/B12";

export default function Home() {
  return (
    <main>
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5></B5>
      <B6></B6>
      <h2>Bài 7</h2>
      <B7 type="primary">Primary</B7>
      <B7 type="success">Success</B7>
      <B7 type="danger">Danger</B7>
      <B7 type="warning">Warning</B7>
      <B7 type="info">Info</B7>
      <h2>Bài 8</h2>
      <B8></B8>
      <h2>Bài 9</h2>
      <B9 type="success" message="Success"></B9>
      <B9 type="warning" message="Warning"></B9>
      <B9 type="error" message="Error"></B9>
      <h2>Bài 10</h2>
      <B10
        content="Áo phông xanh màu xanh"
        children={<B7 type="primary">Mua hàng</B7>}
        title="Áo phông xanh"
        image="https://bizweb.dktcdn.net/100/287/440/products/ao-thun-nam-form-rong-tay-lo-mau-den-18.jpg?v=1618754798253"
      ></B10>
      \<h2>Bài 11</h2>
      <div className="p-[10px] bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <B11 />
        </div>
      </div>
      <h2>Bài 12</h2>
      <div className="flex flex-col items-center justify-center">
        <B12 />
      </div>
    </main>
  );
}
