import { FC } from "react";
// import logo from "../../assets/icons/dog.png";
import arrowDown from "../../assets/icons/up-arrow.png";

type TopMenuDogDetailsProps = {
	name: string | undefined
	age: number | undefined
	showDetails: boolean;
	setShowDetails: () => void;
};

const TopMenuDetails: FC<TopMenuDogDetailsProps> = ({
	name,
	age,
	showDetails,
	setShowDetails,
}) => {
	return (
		<div
			className={`w-full h-[8svh] bg-zinc-900 flex justify-between px-6 items-center ${
				!showDetails && "hidden"
			}`}
		>
			<div className='text-white'>
				<div className='flex'>
					<h1 className='text-xl font-bold'>{name}</h1>
					<h3 className='text-xl'> , {age}</h3>
				</div>
			</div>
			<div className='w-[30%] h-[6svh] flex justify-end  '>
				<button
					className='flex items-center justify-center'
					onClick={setShowDetails}
				>
					<img
						src={arrowDown}
						alt=''
						className='h-[90%] p-2  transition-all  hover:scale-110 rotate-180'
					/>
				</button>
			</div>
		</div>
	);
};

export default TopMenuDetails;
