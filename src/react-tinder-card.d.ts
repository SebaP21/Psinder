declare module "react-tinder-card" {
	import React from "react";

	export interface TinderCardProps {
		onSwipe?: (direction: "left" | "right" | "up" | "down") => void;
		onCardLeftScreen?: (direction: string) => void;
		preventSwipe?: Array<"left" | "right" | "up" | "down">;
		children?: React.ReactNode;
		className?: string;
		style?: React.CSSProperties;
	}

	export interface TinderCardInstance {
		swipe: (direction: "left" | "right" | "up" | "down") => void;
	}

	const TinderCard: React.ForwardRefExoticComponent<
		TinderCardProps & React.RefAttributes<TinderCardInstance>
	>;

	export default TinderCard;
}
