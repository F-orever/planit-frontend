import React from "react";
import { atom } from "recoil";

export const modalState = atom<{
	children: React.ReactNode;
	isopen: boolean;
}>({
	key: "modalState",
	default: {
		children: null,
		isopen: false,
	},
});
