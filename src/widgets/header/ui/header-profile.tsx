import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <button onClick={() => router.push("/profile")}>
      <Image src={session?.user?.image || ""} width={200} height={200} alt="" />
      <h2>{session?.user?.email || ""}</h2>
    </button>
  );
};

export default HeaderProfile;
