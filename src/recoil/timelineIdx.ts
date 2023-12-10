import { atom } from "recoil";

/* 
	영상 속 장소에 대한 실시간 타임라인 상태입니다.
	현재 선택된 장소의 Index를 가집니다
 */
export const timelineIdx = atom<number>({
	key: "timelineIdx",
	default: 0,
});

/* 
	영상 속 장소에 대한 실시간 타임라인 상태입니다.
	현재 선택된 장소의 시간 정보를 가집니다.
 */
export const sliderTimeState = atom<number>({
	key: "sliderTimeState",
	default: 0,
});
