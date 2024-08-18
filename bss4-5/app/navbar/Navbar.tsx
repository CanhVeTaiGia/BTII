"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <h2>Bài 5 và 6</h2>
      <Link className={pathName === "/home" ? "active" : ""} href={"/home"}>
        Home
      </Link>
      <Link className={pathName === "/about" ? "active" : ""} href={"/about"}>
        About
      </Link>
      <Link
        className={pathName === "/contact" ? "active" : ""}
        href={"/contact"}
      >
        Contact
      </Link>
      <Link className={pathName === "/login" ? "active" : ""} href={"/login"}>
        Login
      </Link>
    </div>
  );
};

export default Navbar;
