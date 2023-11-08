import React from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillTrashFill } from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { myTripState } from "../../recoil/myTripState";

type MyTripTagProps = {
	isgreen: boolean;
	text?: string;
	placeName: string;
	id: number;
};

function MyTripTag({ isgreen, text, placeName, id }: MyTripTagProps) {
	const setMyTrip = useSetRecoilState(myTripState);

	return (
		<Container isgreen={isgreen}>
			{isgreen ? (
				<span className="head">{text}</span>
			) : (
				<GiHamburgerMenu className="handle" />
			)}
			<span className={isgreen ? "" : "placeName"}>{placeName}</span>
			{!isgreen && (
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

const Container = styled.div<{ isgreen: boolean }>`
	width: 250px;
	height: 40px;
	flex-shrink: 0;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

	border-radius: 7.5px;
	border: 0.75px solid ${({ theme }) => theme.textPrimary};
	background-color: ${({ isgreen, theme }) => isgreen ? "#32543A" : "white"};

	span {
		color: ${({ isgreen, theme }) => isgreen ? "white" : theme.textPrimary};
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 1.6px;
		max-width: 140px;
	}

	.placeName {
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		color: ${({ theme }) => theme.textPrimary};
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.4px;
	}

	svg {
		width: ${({ isgreen }) => (isgreen ? "20px" : "26px")};
		height: ${({ isgreen }) => (isgreen ? "28px" : "20px")};

		position: absolute;
		left: ${({ isgreen }) => (isgreen ? "52px" : "50px")};
		top: ${({ isgreen }) => (isgreen ? "9px" : "13px")};
	}

	.handle {
		position: absolute;
		top: 14px;
		left: 15px;

		width: 12px;
		height: 12px;
		color: #4a4a4a;
		cursor: pointer;
	}

	.head {
		font-size: 12px;
		font-weight: 500;
		letter-spacing: -0.3px;

		position: absolute;
		left: 9px;
		top: 13px;
	}

	.trash {
		width: 18px;
		height: 20px;
		cursor: pointer;

		position: absolute;
		left: inherit;
		right: 13px;
		top: 10px;
	}
`;

export default MyTripTag;
