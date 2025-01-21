declare module "react-tinder-card" {
	import React from "react";

	export interface TinderCardProps {
		onSwipe?: (direction: "left" | "right" | "up" | "down") => void;
		onCardLeftScreen?: (direction: string) => void;
		onSwipeStart?: (direction: "left" | "right" | "up" | "down") => void; // Dodano wsparcie dla `onSwipeStart`
		onSwiping?: (direction: "left" | "right" | "up" | "down") => void; // Dodano wsparcie dla `onSwiping`
		onMove?: (e: React.MouseEvent | React.TouchEvent, index: number) => void; // Dodanie obsługi dla onMove
		preventSwipe?: Array<"left" | "right" | "up" | "down">;
		children?: React.ReactNode;
		className?: string;
		style?: React.CSSProperties;
	}

	export interface TinderCardInstance {
		style: any;
		swipe: (direction: "left" | "right" | "up" | "down") => void;
	}

	const TinderCard: React.ForwardRefExoticComponent<
		TinderCardProps & React.RefAttributes<TinderCardInstance>
	>;

	export default TinderCard;
}
