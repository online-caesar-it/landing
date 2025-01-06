import { useSession } from "@/shared/hooks/useSession";
import Link from "next/link";

const HeaderProfile = () => {
  const { session } = useSession();
  return (
    <Link href={"/profile"}>
      <p>
        {session?.firstName} {session?.surname}
      </p>
    </Link>
  );
};

export default HeaderProfile;
