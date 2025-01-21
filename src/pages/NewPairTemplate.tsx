import TopMenuHome from "../components/Menu/TopMenuHome";

const NewPairAndMessageTemplate = () => {
	return (
		<section className='w-full bg-zinc-900 min-h-[100svh]'>
			<TopMenuHome />
			{/* NewPairs */}
			<div className='w-full flex flex-col gap-4'>
				<h3 className='pt-6 pl-2 font-bold text-white'>Nowe Pary</h3>
				<div className=' w-full h-[30svh] bg-zinc-700 flex items-center p-2 gap-2 overflow-x-scroll scrollbar-hide'>
					{/* dogPairCard */}

					<div
						className='h-[26svh] hover:h-[27svh] transition-all bg-zinc-500 min-w-[31%] rounded-lg bg-cover bg-center flex justify-center items-end overflow-hidden'
						style={{
							backgroundImage: `url(https://cdn.pixabay.com/photo/2019/12/12/16/26/dog-4691164_1280.jpg)`,
						}}
					>
						<div className='h-[4svh] w-full text-white backdrop-blur-sm flex items-center justify-center p-1'>
							<h4>Bezunda</h4>
						</div>
					</div>
				</div>
			</div>
			{/* Messages */}
			<div className='w-full flex flex-col '>
				<h3 className='pt-6 pb-4 pl-2 font-bold text-white'>Wiadomości</h3>

				{/* MessageTemplate */}
				<div className='transition-all w-full min-h-[5svh] bg-zinc-900 border-b-[1px] flex p-1 gap-6 items-center py-3 hover:py-5 hover:bg-zinc-800 cursor-pointer'>
					<div
						className='w-[8svh] h-[8svh] rounded-full bg-cover bg-center'
						style={{
							backgroundImage: `url(https://cdn.pixabay.com/photo/2019/12/12/16/26/dog-4691164_1280.jpg)`,
						}}
					></div>
					<div className='w-[8svh] items-center flex-grow justify-center '>
						<p className='truncate text-white p-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
							molestia
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewPairAndMessageTemplate;
