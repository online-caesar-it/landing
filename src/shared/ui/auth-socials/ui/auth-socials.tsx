import { VkIcon, YandexIcon } from '../../icons';

export const AuthSocials = () => {
	return (
		<div className='flex gap-[35px]'>
			<button
				title='Зарегистрироваться через Яндекс'
				aria-label='Зарегистрироваться через Яндекс'
			>
				<YandexIcon />
			</button>
			<button
				title='Зарегистрироваться через Вконтакте'
				aria-label='Зарегистрироваться через Вконтакте'
			>
				<VkIcon />
			</button>
		</div>
	);
};
