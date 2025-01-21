import searchByFilter from "../../assets/icons/search.png";
import whoLikes from "../../assets/icons/love.png";
import pairsAndMessage from "../../assets/icons/speech-bubble.png";
import profilEdit from "../../assets/icons/user.png";
import logo from "../../assets/icons/dog.png";

const NavBottom = () => {
	return (
		<div className='w-full h-[8svh] bg-black flex justify-evenly'>
			<button className='flex items-center justify-center'>
				<img
					src={logo}
					alt=''
					className='h-[60%] p-2  transition-all  hover:scale-110'
				/>
			</button>
			<button className='flex items-center justify-center'>
				<img
					src={searchByFilter}
					alt=''
					className='h-[60%] p-2  transition-all  hover:scale-110'
				/>
			</button>
			<button className='flex items-center justify-center'>
				<img
					src={whoLikes}
					alt=''
					className='h-[60%] p-2  transition-all  hover:scale-110'
				/>
			</button>
			<button className='flex items-center justify-center'>
				<img
					src={pairsAndMessage}
					alt=''
					className='h-[60%] p-2  transition-all  hover:scale-110'
				/>
			</button>
			<button className='flex items-center justify-center'>
				<img
					src={profilEdit}
					alt=''
					className='h-[60%] p-2  transition-all  hover:scale-110'
				/>
			</button>
		</div>
	);
};

export default NavBottom;
