export type TRoleUserType = 'student' | 'admin' | 'educator';

export type TUser = {
	id: string;
	firstName: string;
	surname: string;
	patronymic: string;
	role: TRoleUserType;
	config: {
		id: string;
		userId: string;
		email: string;
		phone_number: string;
		refresh_token: string;
	};
};
