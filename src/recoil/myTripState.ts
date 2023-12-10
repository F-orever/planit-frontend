import { atom } from "recoil";

export type ItemType = {
	id: number;
	icon: React.ReactNode;
	placeName: string;
};

/*
	내 여행 정보 리스트의 요소에 ID값을 부여하기 위한 전역 상태입니다.
	여행 정보가 추가 될 때 마나 +1씩 되면서 고유한 ID값을 부여해 줍니다.
*/
export const myTripID = atom<number>({
	key: "myTripId",
	default: 3,
});

/*
	내 여행 정보 리스트를 담고 있는 전역 상태입니다.
*/
export const myTripState = atom<ItemType[]>({
	key: "myTripState",
	default: [],
});
