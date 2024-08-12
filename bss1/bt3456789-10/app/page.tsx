import B4 from "./pages/B4";
import Button from "./components/Button";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <h2>Bài tập 3</h2>
      <p>Họ và tên: Lương Hà Minh Vỹ</p>
      <h2>Bài tập 4</h2>
      <B4></B4>
      <h2>Bài tập 5</h2>
      <Button>Thêm mới</Button>
      <Button>Sửa</Button>
      <Button>Xóa</Button>
      <h2>Bài 7</h2>
      <Header></Header>
      <h2>Bài 8</h2>
      <Footer></Footer>
      <h2>Bài 10</h2>
      <FontAwesomeIcon className="text-[32px]" icon={faCoffee} />
    </main>
  );
}
