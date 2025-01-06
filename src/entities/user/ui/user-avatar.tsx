import { TUser } from "@/shared/types/user-type";

const UserAvatar = ({
  user,
  isLoading,
}: {
  user?: TUser;
  isLoading: boolean;
}) => {
  if (isLoading || !user) {
    return <div>skeleton</div>;
  }

  return (
    <div>
      {user.firstName} {user.surname}
    </div>
  );
};

export default UserAvatar;
