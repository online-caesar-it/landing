"use client";

import React from "react";

import { signIn } from "next-auth/react";
const SignIn = () => {
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
