"use client";

import { useSession } from "@/shared/hooks/useSession";
import React from "react";

const Page = () => {
  const { data } = useSession();
  console.log(data)
  return <div style={{ textAlign: "center", marginTop: "50px" }}></div>;
};

export default Page;
