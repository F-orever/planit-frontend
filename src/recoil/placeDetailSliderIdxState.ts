import { atom } from "recoil";

/*
	장소 정보를 나타내는 슬라이더의 index 전역 상태 입니다.
*/
export const placeDetailSliderIdx = atom<number>({
	key: "slderIdx",
	default: 1,
});
