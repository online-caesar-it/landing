"use client";

import React from "react";

import { signIn } from "next-auth/react";
const SignIn = () => {
  console.log("VK_CLIENT_ID:", process.env.NEXT_PUBLIC_VK_CLIENT_ID);
  console.log("VK_CLIENT_SECRET:", process.env.NEXT_PUBLIC_VK_CLIENT_SECRET);
  console.log("YANDEX_CLIENT_ID:", process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID);
  console.log(
    "YANDEX_CLIENT_SECRET:",
    process.env.NEXT_PUBLIC_YANDEX_CLIENT_SECRET
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <button onClick={() => signIn("vk")} style={{ marginBottom: "10px" }}>
        Sign in with VK
      </button>
      <button onClick={() => signIn("yandex")}>Sign in with Yandex</button>
    </div>
  );
};

export default SignIn;
