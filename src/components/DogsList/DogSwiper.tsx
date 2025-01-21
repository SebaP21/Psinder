import { useState, useEffect, useRef } from "react";
import TinderCard, { TinderCardInstance } from "react-tinder-card";
import axios from "axios";
import TopMenuHome from "../Menu/TopMenuHome";
import dogDetails from "../../assets/icons/up-arrow.png";
import yes from "../../assets/icons/paws (1).png";
import nope from "../../assets/icons/paws.png";
import NavBottom from "../Nav/NavBottom";
import React from "react";
import desctioptionIcon from "../../assets/icons/heart.png";
import snackIcon from "../../assets/icons/pet-bowl.png";
import interestIcon from "../../assets/icons/dog-training.png";
import breed from "../../assets/icons/dachshund.png";
import TopMenuDetails from "../Menu/TopMenuDetails";

interface Dog {
	id: string;
	name: string;
	breed: string;
	age: number;
	description: string;
	location: {
		coordinates: [number, number];
	};
	images: string[];
}

const DogTinder = () => {
	const [dogs, setDogs] = useState<Dog[]>([]);
	const [imageIndices, setImageIndices] = useState<number[]>([]);
	const [activeSwipe, setActiveSwipe] = useState<{
		index: number;
		direction: "left" | "right" | null;
	} | null>(null);
	const cardRefs = useRef<React.RefObject<TinderCardInstance>[]>([]);

	const [showDetails, setShowDetails] = useState(false);
	const [currentDog, setCurrentDog] = useState<Dog>();

	// Pobranie danych z API
	useEffect(() => {
		const fetchDogs = async () => {
			try {
				const response = await axios.get(
					"https://psinder-backend.onrender.com/api/dogs/"
				);
				setDogs(response.data);
				setImageIndices(response.data.map(() => 0));
				cardRefs.current = response.data.map(() => React.createRef());
			} catch (error) {
				console.error("Error fetching dogs:", error);
			}
		};

		fetchDogs();
	}, []);

	useEffect(() => {
		if (dogs.length > 0) {
			setCurrentDog(dogs[dogs.length - 1]);
		} else {
			setCurrentDog(undefined);
		}
	}, [dogs]);

	// Obsługa zdarzenia przesuwania
	const swiped = (direction: "left" | "right", name: string, index: number) => {
		console.log(`Swiped ${direction} on ${name}`);

		// Opóźnione usuwanie elementu
		setTimeout(() => {
			setDogs((prev) => prev.filter((_, i) => i !== index));
			setActiveSwipe(null); // Resetowanie obramowania po zakończeniu swipe
		}, 300);
	};

	const outOfFrame = (name: string) => {
		console.log(`${name} left the screen`);
	};

	const handleImageChange = (dogIndex: number, imgIndex: number) => {
		setImageIndices((prev) =>
			prev.map((currentIndex, i) => (i === dogIndex ? imgIndex : currentIndex))
		);
	};

	// Funkcja programowego przesunięcia karty
	const swipe = async (direction: "left" | "right") => {
		if (dogs.length > 0) {
			const activeIndex = dogs.length - 1;
			setActiveSwipe({ index: activeIndex, direction }); // Ustawianie obramowania
			const activeCardRef = cardRefs.current[activeIndex]?.current;
			if (activeCardRef) {
				await activeCardRef.swipe(direction);
			}
		}
	};

	// Obsługa kliknięcia przycisków
	const handleYesClick = () => swipe("right");
	const handleNoClick = () => swipe("left");

	//Funkcja dla showDetails

	const detailsClick = () => {
		setShowDetails((prev) => !prev);
	};

	return (
		<section className='w-full bg-zinc-700 min-h-[100svh] flex flex-col overflow-hidden'>
			<TopMenuHome showDetails={showDetails} />
			<TopMenuDetails
				name={currentDog?.name || "Brak psów"}
				age={currentDog?.age}
				showDetails={showDetails}
				setShowDetails={detailsClick}
			/>

			{/* TinderBox */}
			<div
				className={`relative w-full flex flex-col ${
					showDetails ? "h-[50svh]" : "h-[84svh]"
				}`}
			>
				{dogs.map((dog, index) => (
					<TinderCard
						ref={cardRefs.current[index]}
						key={index}
						onSwipe={(dir) => {
							swiped(dir as "left" | "right", dog.name, index);
							setCurrentDog(dog);
						}}
						onCardLeftScreen={() => outOfFrame(dog.name)}
						preventSwipe={["up", "down"]}
						onSwipeStart={(dir) => {
							setActiveSwipe({
								index,
								direction: dir === "right" ? "right" : "left",
							});
						}}
					>
						<div
							className={`absolute w-full bg-cover shadow-lg flex flex-col transition-all justify-between ease-in-out rounded-lg ${
								showDetails ? "h-[50svh]" : "h-[70svh]"
							}  ${
								activeSwipe?.index === index &&
								(activeSwipe.direction === "right"
									? "border-[20px] border-green-700 "
									: "border-[20px] border-red-800")
							}`}
							style={{
								backgroundImage: `url(${dog.images[imageIndices[index]]})`,
							}}
						>
							<div className='w-[60%] mx-auto h-[25px] flex px-4 py-2 gap-4 justify-center'>
								{dog.images.map((_, imgIndex) => (
									<div
										key={imgIndex}
										className={`border-2 flex-grow max-w-[30%] rounded-lg ${
											imgIndex === imageIndices[index]
												? "bg-gray-300"
												: "bg-transparent"
										}`}
										onClick={() => handleImageChange(index, imgIndex)}
									></div>
								))}
							</div>

							{/* dogDetails */}
							<div
								className={`${
									showDetails && "hidden"
								} flex w-full justify-between px-4 bg-black/20 backdrop-blur-sm py-6 mb-8`}
							>
								<div className='text-white'>
									<div className='flex'>
										<h1 className='text-3xl font-bold'>{dog.name}</h1>
										<h3 className='text-3xl'>, {dog.age}</h3>
									</div>
									<h4>5 km</h4>
								</div>
								<button
									className={`max-w-[30px] transition-all hover:scale-110 
									 `}
									onClick={detailsClick}
								>
									<img
										src={dogDetails}
										alt=''
									/>
								</button>
							</div>
						</div>
					</TinderCard>
				))}
			</div>

			{/* dogDetailsInterests */}
			{showDetails ? (
				<>
					<div className='pt-4 px-1'>
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
										Buldog Lorem ipsum dolor sit, amet consectetur adipisicing
										elit.
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
										quam, omnis accusamus aperiam quod nemo.
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
										{["🥎", "🥍", "🦴", "🐈"].map((icon) => (
											<div
												key={icon}
												className='py-2 px-4 bg-zinc-700 rounded-xl'
											>
												<p>{icon}</p>
											</div>
										))}
									</div>
									<div>
										<p>Lorem ipsum dolor sit amet consectetur.</p>
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
						<section className='w-full flex flex-col gap-2 mt-2 text-white'>
							<button className='w-full bg-zinc-800 rounded-xl px-6 py-6 text-center'>
								<p className='text-xl font-bold transition-all hover:text-red-700'>
									Udostępnij profil
								</p>
							</button>
							<button className='w-full bg-zinc-800 rounded-xl px-6 py-6 text-center'>
								<p className='text-xl font-bold transition-all hover:text-red-700'>
									Zablokuj użytkownika
								</p>
							</button>
							<button className='w-full bg-zinc-800 rounded-xl px-6 py-6 text-center'>
								<p className='text-xl font-bold transition-all text-red-700 hover:text-red-800'>
									Zgłoś użytkownika
								</p>
							</button>
						</section>

						{/* ChooseMenu */}
						<div className='w-full h-[15svh] flex justify-evenly p-2'>
							<button
								className='flex items-center justify-center'
								onClick={() => {
									handleNoClick();
									setShowDetails((prev) => !prev);
								}}
							>
								<img
									src={nope}
									alt=''
									className='h-[80%] bg-zinc-900 p-2 rounded-full -rotate-12 transition-all hover:-rotate-45 hover:scale-110'
								/>
							</button>
							<button
								className='flex items-center justify-center'
								onClick={() => {
									handleYesClick();
									setShowDetails((prev) => !prev);
								}}
							>
								<img
									src={yes}
									alt=''
									className='h-[80%] bg-zinc-900 p-2 rounded-full rotate-12 transition-all hover:rotate-45 hover:scale-110'
								/>
							</button>
						</div>
					</div>
				</>
			) : (
				<div className='absolute w-full h-[17svh] bg-gradient-to-b from-transparent to-black flex justify-evenly p-2 bottom-[8%]'>
					<button
						className='flex items-center justify-center'
						onClick={handleNoClick}
					>
						<img
							src={nope}
							alt=''
							className='h-[80%] bg-zinc-900 p-2 rounded-full -rotate-12 transition-all hover:-rotate-45 hover:scale-110'
						/>
					</button>
					<button
						className='flex items-center justify-center'
						onClick={handleYesClick}
					>
						<img
							src={yes}
							alt=''
							className='h-[80%] bg-zinc-900 p-2 rounded-full rotate-12 transition-all hover:rotate-45 hover:scale-110'
						/>
					</button>
				</div>
			)}

			<NavBottom />
		</section>
	);
};

export default DogTinder;
