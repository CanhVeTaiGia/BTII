"use client";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

interface AddressType {
  street: string;
  suite: string;
  city: string;
}

interface UserType {
  id: number;
  name: string;
  email: string;
  address: AddressType;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res: AxiosResponse<UserType[]> = await axios.get(
          "http://localhost:3000/api/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getData();
  }, []);

  return (
    <table className="w-[100%]">
      <thead>
        <tr>
          <th className="px-[10px] border-[1px] w-[4%] border-black">STT</th>
          <th className="px-[10px] border-[1px] w-[50%] border-black">
            Họ và tên
          </th>
          <th className="px-[10px] border-[1px] border-black">Email</th>
          <th className="px-[10px] border-[1px] border-black">Địa chỉ</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item: UserType, index: number) => (
          <tr key={item.id}>
            <td className="text-center w-[5%] font-[600] px-[10px] border-[1px] border-black">
              {index + 1}
            </td>
            <td className="text-center font-[600] px-[10px] border-[1px] border-black">
              {item.name}
            </td>
            <td className="text-center font-[600] px-[10px] border-[1px] border-black">
              {item.email}
            </td>
            <td className="text-center font-[600] px-[10px] border-[1px] border-black">
              {item.address.street}, {item.address.suite}, {item.address.city}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
