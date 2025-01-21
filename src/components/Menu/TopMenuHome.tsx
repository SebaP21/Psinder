import logo from "../../assets/icons/dog.png";
import activity from "../../assets/icons/bell.png";
import settings from "../../assets/icons/setting.png";
import { FC } from "react";

type TopMenuHomeProps = {
	showDetails:boolean
}


const TopMenuHome:FC<TopMenuHomeProps> = ({showDetails}) => {
	return (
		<div className={`${showDetails && "hidden"} w-full h-[8svh] bg-zinc-900 flex justify-between px-6`}>
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
	);
};
export default TopMenuHome;
