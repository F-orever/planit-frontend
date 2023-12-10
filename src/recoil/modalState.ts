import { atom } from "recoil";

/*
	modal 창
*/
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
