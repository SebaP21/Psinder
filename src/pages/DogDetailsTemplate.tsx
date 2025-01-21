import logo from "../assets/icons/dog.png";
// import NavBottom from "../components/Nav/NavBottom";
import desctioptionIcon from "../assets/icons/heart.png";
import snackIcon from "../assets/icons/pet-bowl.png";
import interestIcon from "../assets/icons/dog-training.png";
import breed from "../assets/icons/dachshund.png";

import nope from "../assets/icons/paws.png";
import yes from "../assets/icons/paws (1).png";

const DogDetailsTemplate = () => {
	return (
		<>
			<section className='bg-black'>
				{/* TopDogDetails */}

				<div className='w-full h-[8svh] bg-zinc-900 flex justify-between px-6 items-center'>
					<div className='text-white'>
						<div className='flex'>
							<h1 className='text-3xl font-bold'>Pershing</h1>
							<h3 className='text-3xl'> , 4</h3>
						</div>
					</div>
					<div className='w-[30%] h-[8svh] flex justify-center '>
						<button className='flex items-center justify-center'>
							<img
								src={logo}
								alt=''
								className='h-[90%] p-2  transition-all  hover:scale-110'
							/>
						</button>
					</div>
				</div>
				{/* dogsGallery */}
				<section
					className='w-full mx-auto h-[50svh] bg-cover bg-center flex flex-col justify-between rounded-b-xl mb-2'
					style={{
						backgroundImage: `url(https://cdn.pixabay.com/photo/2019/12/12/16/26/dog-4691164_1280.jpg)`,
					}}
				>
					<div className='w-[60%] mx-auto h-[25px] flex px-4 py-2 gap-4 justify-center '>
						<div className='border-2 flex-grow bg-white max-w-[30%] rounded-lg'></div>
						<div className='border-2 flex-grow bg-white max-w-[30%] rounded-lg'></div>
						<div className='border-2 flex-grow bg-white max-w-[30%] rounded-lg'></div>
					</div>
				</section>
				{/* dogDetailsInterests dodać typ snacks do backendu!!!! */}
				<section className='w-full flex flex-col gap-2 '>
					{/* dogBreed */}
					<div className='w-full rounded-xl bg-zinc-800 px-6 py-4 flex flex-col gap-2 '>
						<div className='text-zinc-400 flex'>
							<div className='h-[5svh] flex justify-center items-center gap-2'>
								<img
									src={breed}
									alt=''
									className='h-[80%]'
								/>
								<h2 className='text-xl font-bold'>Rasa</h2>
							</div>
						</div>
						<div className='text-white text-xl'>
							<p>
								Buldog Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
							</p>
						</div>
					</div>
					{/* dogDetailsDescription */}
					<div className='w-full rounded-xl bg-zinc-800 px-6 py-4 flex flex-col gap-2'>
						<div className='text-zinc-400 flex'>
							<div className='h-[5svh] flex justify-center items-center gap-2'>
								<img
									src={desctioptionIcon}
									alt=''
									className='h-[80%]'
								/>
								<h2 className='text-xl font-bold'>Opis</h2>
							</div>
						</div>
						<div className='text-white text-xl'>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
								quam, omnis accusamus aperiam quod nemo, impedit molestiae
								sapiente est quae possimus, obcaecati inventore neque
								dignissimos aspernatur. Dolores velit quam eaque id a porro
								corrupti, culpa illum itaque distinctio. Error atque minima
								culpa ipsam qui quae, reprehenderit ratione maiores placeat
								ipsum voluptatum optio fugiat aliquid at.
							</p>
						</div>
					</div>
					{/* dogInterests */}

					<div className='w-full rounded-xl bg-zinc-800 px-6 py-4 flex flex-col gap-2'>
						<div className='text-zinc-400 flex'>
							<div className='h-[5svh] flex justify-center items-center gap-2'>
								<img
									src={interestIcon}
									alt=''
									className='h-[80%]'
								/>
								<h2 className='text-xl font-bold'>Ulubione aktywności</h2>
							</div>
						</div>
						<div className='text-white text-xl flex flex-col gap-4'>
							<div className='w-full flex text-center gap-2'>
								<div className='py-2 px-4 bg-zinc-700 rounded-xl'>
									<p>🥎</p>
								</div>
								<div className='py-2 px-4 bg-zinc-700 rounded-xl'>
									<p>🥍</p>
								</div>
								<div className='py-2 px-4 bg-zinc-700 rounded-xl'>
									<p>🦴</p>
								</div>
								<div className='py-2 px-4 bg-zinc-700 rounded-xl'>
									<p>🐈</p>
								</div>
							</div>
							<div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
									quam, omnis accusamus aperiam quod nemo, impedit molestiae
								</p>
							</div>
						</div>
					</div>
					{/* favouriteSnacks */}
					<div className='w-full rounded-xl bg-zinc-800 px-6 py-4 flex flex-col gap-2 '>
						<div className='text-zinc-400 flex'>
							<div className='h-[5svh] flex justify-center items-center gap-2'>
								<img
									src={snackIcon}
									alt=''
									className='h-[80%]'
								/>
								<h2 className='text-xl font-bold'>Najlepszy smakołyk</h2>
							</div>
						</div>
						<div className='text-white text-xl'>
							<p>Kabanosy!</p>
						</div>
					</div>
				</section>
				{/* ShareProfile Flag Locked */}
				<section className='w-full flex flex-col gap-2 mt-2 tex-white'>
					<button className='w-full bg-zinc-800 rounded-xl px-6 py-6 text-white text-center '>
						<p className='text-xl font-bold transition-all hover:text-red-700'>
							Udostępnij profil
						</p>
					</button>
					<button className='w-full bg-zinc-800 rounded-xl px-6 py-6 text-white text-center '>
						<p className='text-xl font-bold transition-all hover:text-red-700'>
							Zablokuj użytkownika
						</p>
					</button>
					<button className='w-full bg-zinc-800 rounded-xl px-6 py-6 text-white text-center '>
						<p className='text-xl font-bold transition-all text-red-700 hover:text-red-800'>
							Zgłoś użytkownika
						</p>
					</button>
				</section>
				{/* ChooseMenu */}
				<div className='w-full h-[15svh] flex justify-evenly p-2'>
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
			</section>
			{/* <NavBottom /> */}
		</>
	);
};

export default DogDetailsTemplate;
