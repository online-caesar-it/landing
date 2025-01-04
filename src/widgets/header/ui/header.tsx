import If from "@/features/by-condition/by-conditon";

import HeaderProfile from "./header-profile";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  return (
    <If
      when={false}
      elseComponent={
        <div className="flex-col gap-2 flex">
          <button
            className="bg-blue-500"
            onClick={() => router.push("/auth/sign-in")}
          >
            Войти
          </button>
          <button
            onClick={() => router.push("/auth/sign-up")}
            className="bg-blue-500"
          >
            Зарегаться
          </button>
        </div>
      }
    >
      <HeaderProfile />
    </If>
  );
};

export default Header;
