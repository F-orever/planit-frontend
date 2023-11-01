import React from "react";
import { atom } from "recoil";

export const sliderIdx = atom<number>({
	key: "slderIdx",
	default: 0,
});
