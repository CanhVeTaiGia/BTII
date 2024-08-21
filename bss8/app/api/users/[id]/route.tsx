import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

interface PropType {
  params: {
    id: string;
  };
}

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const filePath = path.join(process.cwd(), "database/users.json");
  const users: any = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const user: any = users?.find((user: any) => user.id == id);
  return NextResponse.json(user ? user : { message: "Lỗi không thể xử lí" });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const filePath = path.join(process.cwd(), "database/users.json");
  const users: any[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const foundIndex: any = users?.findIndex((user) => user.id == id);
  if (foundIndex === -1) {
    return NextResponse.json({ message: "Không tìm thấy người dùng" });
  }
  users.splice(foundIndex, 1);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
  return NextResponse.json({ message: "Xóa thông tin người dùng thành công" });
};

export const PUT = async (req: NextRequest, { params }: PropType) => {
  const updateUser = {
    id: params.id,
    name: "updated",
    age: 21,
  };
  const { id } = params;
  const filePath = path.join(process.cwd(), "database/users.json");
  const users: any[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const foundIndex: any = users?.findIndex((user) => user.id == id);
  if (foundIndex === -1) {
    return NextResponse.json({ message: "Không tìm thấy người dùng" });
  }
  users[foundIndex] = updateUser;
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
  return NextResponse.json({ message: "Sửa thông tin người dùng thành công" });
};
