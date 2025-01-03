"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> {session?.user?.name}</h1>
      <p> {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Page;
