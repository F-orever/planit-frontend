import React from "react";
import { atom } from "recoil";

export const placeDetailSliderIdx = atom<number>({
	key: "slderIdx",
	default: 1,
});
