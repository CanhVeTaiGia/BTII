"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const auth = useAuth();
  const { isSignedIn } = auth;
  const route = useRouter();

  useEffect(() => {
    isSignedIn? null : route.push('/sign-in')
  }, []);

  return <div>page</div>;
};

export default page;
