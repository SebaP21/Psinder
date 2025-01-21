import logo from "../assets/icons/dog.png";
import activity from "../assets/icons/bell.png";
import settings from "../assets/icons/setting.png";
import yes from "../assets/icons/paws (1).png";
import nope from "../assets/icons/paws.png";

import dogDetails from "../assets/icons/up-arrow.png";
import NavBottom from "../components/Nav/NavBottom";

const Home = () => {
	return (
		<section className=' w-full bg-zinc-700 min-h-[100svh] flex flex-col'>
			{/* TopMenuHome */}

			<div className='w-full h-[8svh] bg-zinc-900 flex justify-between px-6'>
				<div className='w-[30%] h-[8svh] flex'>
					<button className='flex items-center justify-center'>
						<img
							src={logo}
							alt=''
							className='h-[90%] p-2  transition-all  hover:scale-110'
						/>
					</button>
				</div>
				<div className='w-[40%] h-[8svh] flex justify-evenly'>
					<button className='flex items-center justify-center'>
						<img
							src={activity}
							alt=''
							className='h-[60%] p-2  transition-all  hover:scale-110'
						/>
					</button>
					<button className='flex items-center justify-center'>
						<img
							src={settings}
							alt=''
							className='h-[60%] p-2  transition-all  hover:scale-110'
						/>
					</button>
				</div>
			</div>
			{/* CardBox */}
			<div className='w-full min-h-[84svh] bg-white flex flex-col justify-end'>
				{/* DogCard */}

				<section
					className='w-full mx-auto h-[84svh] bg-cover bg-center flex flex-col justify-between'
					style={{
						backgroundImage: `url(https://cdn.pixabay.com/photo/2019/12/12/16/26/dog-4691164_1280.jpg)`,
					}}
				>
					{/* DogDescription */}

					<div className='w-[60%] mx-auto h-[25px] flex px-4 py-2 gap-4 justify-center '>
						<div className='border-2 flex-grow bg-zinc-800 max-w-[30%] rounded-lg'></div>
						<div className='border-2 flex-grow max-w-[30%] rounded-lg'></div>
						<div className='border-2 flex-grow max-w-[30%] rounded-lg'></div>
					</div>

					<div className='flex w-full justify-between px-4 my-[30%] pb-8'>
						<div className='text-white'>
							<div className='flex'>
								<h1 className='text-3xl font-bold'>Pershing</h1>
								<h3 className='text-3xl'>, 4</h3>
							</div>

							<h3>3km stąd</h3>
						</div>
						<div className='max-w-[30px] transition-all hover:scale-110'>
							<img
								src={dogDetails}
								alt=''
							/>
						</div>
					</div>
				</section>
				{/* ChooseMenu */}
				<div className='absolute  w-full h-[15svh] bg-gradient-to-b from-transparent to-black flex justify-evenly p-2'>
					<button className='flex items-center justify-center'>
						<img
							src={nope}
							alt=''
							className='h-[80%] bg-zinc-900 p-2 rounded-full -rotate-12 transition-all hover:-rotate-45 hover:scale-110'
						/>
					</button>
					<button className='flex items-center justify-center'>
						<img
							src={yes}
							alt=''
							className='h-[80%] bg-zinc-900 p-2 rounded-full rotate-12 transition-all hover:rotate-45 hover:scale-110'
						/>
					</button>
				</div>
			</div>

			{/* BottomMenu Main Menu */}

			<NavBottom />
		</section>
	);
};

export default Home;
