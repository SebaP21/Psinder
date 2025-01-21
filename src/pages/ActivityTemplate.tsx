import arrow from "../assets/icons/left-arrow.png";
import activity from "../assets/icons/bell.png";

const ActivityTemplate = () => {
	return (
		<section className='w-full min-h-[100svh] bg-gradient-to-b from-zinc-700 to-black flex flex-col justify-between'>
			<div className='text-white text-lg h-[8svh] flex gap-4 items-center px-6'>
				<button>
					<img
						src={arrow}
						alt=''
						className='w-[30px]'
					/>
				</button>

				<h3>Aktywność</h3>
			</div>
			<div className='w-full flex min-h-[90svh] items-center flex-col justify-center gap-12 text-white'>
				<div className='w-full flex'>
					<img
						src={activity}
						alt=''
						className='w-[70px] mx-auto'
					/>
				</div>
				<div>
					<p>Nie masz jeszcze powiadomień</p>
				</div>
			</div>
		</section>
	);
};

export default ActivityTemplate;
