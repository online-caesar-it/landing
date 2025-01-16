export type TRoleUserType = "student" | "admin" | "educator";

export type TUser = {
  id: string;
  firstName: string;
  surname: string;
  patronymic: string;
  role: TRoleUserType;
};
