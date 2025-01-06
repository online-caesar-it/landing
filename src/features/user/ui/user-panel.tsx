"use client";

import UserAvatar from "@/entities/user/ui/user-avatar";
import If from "@/features/by-condition/by-condition";
import { useSession } from "@/shared/hooks/useSession";
import Link from "next/link";

const UserPanel = () => {
  const { session, isLoading } = useSession();
  return (
    <div>
      <If
        when={isLoading || !!session}
        elseComponent={
          <Link href={"/profile"}>
            <p>
              {session?.firstName} {session?.surname}
            </p>
          </Link>
        }
      >
        <UserAvatar isLoading={isLoading} user={session} />
      </If>
    </div>
  );
};

export default UserPanel;
