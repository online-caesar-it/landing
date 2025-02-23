import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type TFormStatus = {
	isSuccess: boolean;
	isLoaded: boolean;
};

export const FormStatus = ({ isSuccess, isLoaded }: TFormStatus) => {
	return (
		<div
			className={twMerge(
				'absolute w-full h-full bg-grey-30 z-[2] rounded-[40px] flex flex-col justify-between text-center opacity-100 pointer-events-none transition-all duration-300 lg:min-h-[400px] lg:rounded-[20px] md:min-h-fit',
				isLoaded && 'opacity-100 pointer-events-auto'
			)}
		>
			<div className='h-full flex flex-col items-center justify-center font-intro'>
				<Image
					alt=''
					width={220}
					height={220}
					src={isSuccess ? '/icons/success.png' : '/icons/error.png'}
					className='scale-150 mb-10 -mt-14 lg:scale-100 lg:mb-0 md:w-[160px] md:h-[160px]'
				/>
				<h3 className='text-white text-5xl mb-4'>
					{isSuccess ? 'заявка принята' : 'заявка ОТКЛОНЕНА'}
				</h3>
				<p className='text-[#99A2AD] text-3xl lg:text-lg lg:max-w-[60%]'>
					{isSuccess
						? 'спасибо, что выбрали нас!'
						: 'ЧТО-ТО ПОШЛО НЕ ТАК, ПОПРОБУЙТЕ СНОВА!'}
				</p>
			</div>
			{isSuccess && (
				<span className='text-white mb-[70px]'>
					по введенным данным с вами свяжутся наши менеджеры
				</span>
			)}
		</div>
	);
};
