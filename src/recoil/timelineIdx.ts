import React from "react";
import { atom } from "recoil";

export const timelineIdx = atom<number>({
	key: "timelineIdx",
	default: 0,
});

export const sliderTimeState = atom<number>({
	key: "sliderTimeState",
	default: 0,
});
