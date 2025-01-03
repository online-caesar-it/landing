type IRoleUserType = "user" | "admin";

export type TUserType = {
  id: string;
  email: string;
  role: IRoleUserType;
  firstName: string;
  secondName: string;
  avatar: string;
  lastName: string;
};
