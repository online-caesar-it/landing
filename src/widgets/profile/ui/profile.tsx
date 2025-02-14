import Link from 'next/link';
import { ProfileUser } from './profile-user';
import { ProfileFooter } from './profile-footer';

export const Profile = () => {
	return (
		<div className='font-intro'>
			<div className='underline text-xl mb-[45px] transition-all hover:text-blue-40 w-fit'>
				<Link href='/'>На главную</Link>
			</div>
			<ProfileUser />
			<ProfileFooter />
		</div>
	);
};
