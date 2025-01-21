import { useState, useEffect, useRef } from "react";
import TinderCard, { TinderCardInstance } from "react-tinder-card";
import axios from "axios";
import TopMenuHome from "../Menu/TopMenuHome";
import dogDetails from "../../assets/icons/up-arrow.png";
import yes from "../../assets/icons/paws (1).png";
import nope from "../../assets/icons/paws.png";
import NavBottom from "../Nav/NavBottom";
import React from "react";

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
	const cardRefs = useRef<React.RefObject<TinderCardInstance>[]>([]);

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

	// Obsługa zdarzenia przesuwania
	const swiped = (direction: string, name: string, index: number) => {
		console.log(`Swiped ${direction} on ${name}`);

		// Opóźnione usuwanie elementu
		setTimeout(() => {
			setDogs((prev) => prev.filter((_, i) => i !== index));
		}, 300); // Opóźnienie 300 ms, aby animacja mogła się wykonać
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
			const activeIndex = dogs.length - 1; // Ostatnia karta
			const activeCardRef = cardRefs.current[activeIndex]?.current;
			if (activeCardRef) {
				await activeCardRef.swipe(direction);
			}
		}
	};

	// Obsługa kliknięcia przycisków
	const handleYesClick = () => swipe("right");
	const handleNoClick = () => swipe("left");

	return (
		<section className='w-full bg-zinc-700 min-h-[100svh] flex flex-col overflow-hidden'>
			<TopMenuHome />
			<div className='relative w-full min-h-[84svh]'>
				{dogs.map((dog, index) => (
					<TinderCard
						ref={cardRefs.current[index]}
						key={index} // Klucz oparty na indeksie
						onSwipe={(dir) => swiped(dir, dog.name, index)}
						onCardLeftScreen={() => outOfFrame(dog.name)}
						preventSwipe={["up", "down"]}
					>
						<div
							className={`absolute w-full h-[70svh] bg-cover shadow-lg flex flex-col transition-transform duration-500 justify-between ease-in-out rounded-lg`}
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
							<div className='flex w-full justify-between px-4 bg-black/20 backdrop-blur-sm py-6 mb-8'>
								<div className='text-white'>
									<div className='flex'>
										<h1 className='text-3xl font-bold'>{dog.name}</h1>
										<h3 className='text-3xl'>, {dog.age}</h3>
									</div>
									<h4>5 km</h4>
								</div>
								<div className='max-w-[30px] transition-all hover:scale-110'>
									<img
										src={dogDetails}
										alt=''
									/>
								</div>
							</div>
						</div>
					</TinderCard>
				))}

				{/* ChooseMenu */}
				<div className='absolute w-full h-[17svh] bg-gradient-to-b from-transparent to-black flex justify-evenly p-2 bottom-0'>
					<button className='flex items-center justify-center' onClick={handleNoClick}>
						<img
							src={nope}
							alt=''
							className='h-[80%] bg-zinc-900 p-2 rounded-full -rotate-12 transition-all hover:-rotate-45 hover:scale-110'
						/>
					</button>
					<button className='flex items-center justify-center' onClick={handleYesClick}>
						<img
							src={yes}
							alt=''
							className='h-[80%] bg-zinc-900 p-2 rounded-full rotate-12 transition-all hover:rotate-45 hover:scale-110'
						/>
					</button>
				</div>
			</div>
			<NavBottom />
		</section>
	);
};

export default DogTinder;
