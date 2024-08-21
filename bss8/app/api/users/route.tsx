import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const filePath = path.join(process.cwd(), "database/users.json");
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("name");
    if (search) {
      const filteredUsers = users.filter((user: any) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      return NextResponse.json(filteredUsers);
    }
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch users", details: err });
  }
};

export const POST = async (req: NextRequest) => {
  const user = {
    name: "New User",
    age: 20,
  };
  try {
    const filePath = path.join(process.cwd(), "database/users.json");
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    users.push({ ...user, id: users.length + 1 });
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf8");
    return NextResponse.json({ message: "Thêm thông tin mới thành công" });
  } catch (err: any) {
    return NextResponse.json({
      message: "Lỗi không thể thêm",
    });
  }
};
