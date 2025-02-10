import Image from 'next/image';

export const TeacherCardMobile = () => {
	return (
		<div className='relative flex flex-col'>
			<div className='relative min-w-[260px] aspect-square rounded-t-[25px] overflow-hidden flex items-end justify-center p-3'>
				<Image src='/images/mock.png' alt='' fill />
				<div className='bg-black opacity-30 absolute top-0 left-0 w-full h-full group-hover:opacity-30 transition-all duration-300 z-[2]'></div>
				<div className='text-white font-intro text-xl relative z-[2]'>
					<span>Фронтенд</span>
				</div>
			</div>
			<div className='bg-[#303236] p-5 text-white rounded-b-[25px]'>
				<h3 className='font-intro text-2xl mb-5'>иванов иван иванович</h3>
				<p className='text-base max-h-[250px] overflow-auto'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
					ipsa, amet quidem aut vero quis explicabo modi, recusandae, sed ad
					magni excepturi in dolorum porro eaque beatae consequuntur iste illo!
				</p>
			</div>
		</div>
	);
};
