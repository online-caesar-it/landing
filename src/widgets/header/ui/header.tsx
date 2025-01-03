import ByCondition from "@/features/by-condition/by-conditon";
import { register } from "@/shared/api/auth/register";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import HeaderProfile from "./header-profile";
import { useRouter } from "next/navigation";
// этот код пока тут полежит, потом его отрефакторю
const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const registerUser = async () => {
    try {
      const { data } = await register({
        email: session?.user?.email,
        avatar: session?.user?.image,
      });
      await signIn("credentials", data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    if (status === "authenticated") {
      registerUser();
    }
  }, [status]);
  return (
    <ByCondition
      condition={status === "authenticated"}
      fallback={
        <>
          {status === "loading" ? (
            "loading"
          ) : (
            <button onClick={() => router.push("/auth/signin")}>Войти</button>
          )}
        </>
      }
    >
      <HeaderProfile />
    </ByCondition>
  );
};

export default Header;
