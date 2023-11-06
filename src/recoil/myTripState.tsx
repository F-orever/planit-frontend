import React from "react";
import { atom } from "recoil";
import MarketIcon from "../assets/svg/placetType/MarketIcon.svg";
import Restaurant from "../assets/svg/placetType/Restaurant.svg";

export type ItemType = {
	id: number;
	icon: React.ReactNode;
	placeName: string;
};

export const idState = atom<number>({
	key: "myTripId",
	default: 3,
});

export const myTripState = atom<ItemType[]>({
	key: "myTripState",
	default: [
		{ id: 1, icon: <MarketIcon />, placeName: "초량 밀면" },
		{ id: 2, icon: <Restaurant />, placeName: "감천 문화마을" },
	],
});
