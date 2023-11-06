import React from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillTrashFill } from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { myTripState } from "../../recoil/myTripState";

type MyTripTagProps = {
	isGreen: boolean;
	icon: React.ReactNode;
	text?: string;
	placeName: string;
	id: number;
};

function MyTripTag({ isGreen, icon, text, placeName, id }: MyTripTagProps) {
	const setMyTrip = useSetRecoilState(myTripState);

	return (
		<Container isGreen={isGreen}>
			{isGreen ? (
				<span className="head">{text}</span>
			) : (
				<GiHamburgerMenu className="handle" />
			)}
			{icon}
			<span className={isGreen ? "" : "placeName"}>{placeName}</span>
			{!isGreen && (
				<BsFillTrashFill
					className="trash"
					onClick={() => {
						setMyTrip((prev) => prev.filter((item) => item.id !== id),
						);
					}}
				/>
			)}
		</Container>
	);
}

const Container = styled.div<{ isGreen: boolean }>`
	width: 250px;
	height: 46px;
	flex-shrink: 0;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 7.5px;
	border: 0.75px solid ${({ theme }) => theme.textPrimary};
	background-color: ${({ isGreen, theme }) => isGreen ? theme.primary : "white"};

	span {
		color: ${({ isGreen, theme }) => isGreen ? "white" : theme.textPrimary};
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 1.6px;
		max-width: 93px;
	}

	.placeName {
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		color: ${({ theme }) => theme.textPrimary};
		font-size: 15px;
		font-weight: 400;
		letter-spacing: 1.5px;
	}

	svg {
		width: ${({ isGreen }) => (isGreen ? "20px" : "26px")};
		height: ${({ isGreen }) => (isGreen ? "28px" : "20px")};

		position: absolute;
		left: ${({ isGreen }) => (isGreen ? "52px" : "50px")};
		top: ${({ isGreen }) => (isGreen ? "9px" : "13px")};
	}

	.handle {
		position: absolute;
		top: 17px;
		left: 17px;

		width: 12px;
		height: 12px;
		color: #4a4a4a;
		cursor: pointer;
	}

	.head {
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 1px;

		position: absolute;
		left: 10px;
		top: 7px;
	}

	.trash {
		width: 18px;
		height: 20px;
		cursor: pointer;

		position: absolute;
		left: inherit;
		right: 13px;
		top: 13px;
	}
`;

export default MyTripTag;
