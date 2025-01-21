import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

interface Dog {
	_id: string;
	name: string;
	imageUrl: string;
}

const SwipeCard: React.FC<{ dog: Dog }> = ({ dog }) => {
	const [gone, setGone] = useState(false);

	const [{ x, rot, scale }, api] = useSpring(() => ({
		x: 0,
		rot: 0,
		scale: 1,
	}));

	const bind = useDrag(
		({ offset: [xOffset], movement: [mx], memo = gone }) => {
			const trigger = mx > 150 || mx < -150;
			if (trigger && !gone) {
				setGone(true);
				// Tu wywołaj odpowiedni endpoint backendu, np. dopasowanie psa
			}
			api.start({ x: xOffset, rot: mx / 20, scale: trigger ? 1.1 : 1 });
			return memo;
		},
		{ filterTaps: true }
	);

	return (
		<animated.div
			{...bind()}
			style={{
				x,
				rotate: rot,
				scale,
				touchAction: "none",
				position: "absolute",
			}}
		>
			<img
				src={dog.imageUrl}
				alt={dog.name}
			/>
			<h3>{dog.name}</h3>
		</animated.div>
	);
};

export default SwipeCard;
