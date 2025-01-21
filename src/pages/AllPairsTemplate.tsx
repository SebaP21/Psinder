import TopMenuHome from "../components/Menu/TopMenuHome";
import NavBottom from "../components/Nav/NavBottom";

const AllPairsTemplate = () => {
	return (
		<>
			<section className='w-full min-h-[93svh] bg-gradient-to-b from-zinc-700 to-black'>
				<TopMenuHome />
				<div className='text-white text-xl font-bold w-[90%] mx-auto py-4'>
					<h3>Twoje pary</h3>
				</div>

				{/* PairBox */}
				<div className='w-[90%] mx-auto grid grid-cols-2 gap-4 pt-2'>
					{/* PairCard */}
					<div
						className='h-[26svh] transition-all bg-zinc-500 min-w-[31%] rounded-lg bg-cover bg-center flex justify-center items-end overflow-hidden shadow-none cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-white '
						style={{
							backgroundImage: `url(https://cdn.pixabay.com/photo/2019/12/12/16/26/dog-4691164_1280.jpg)`,
						}}
					>
						<div className='h-[4svh] w-full text-white backdrop-blur-sm flex items-center justify-center p-1'>
							<h4>Bezunda</h4>
						</div>
					</div>
				</div>
			</section>
			<NavBottom />
		</>
	);
};

export default AllPairsTemplate;
