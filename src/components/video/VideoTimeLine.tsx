import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import TimeLineTag from "./TimeLineTag";
import TimeLineTagLinker from "./TimeLineTagLinker";

type currentTimeProps = {
	currentTime: number;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
};

const mockData = [
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		IconType: "Market",
		time: 10,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		IconType: "Market",
		time: 120,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		IconType: "Market",
		time: 240,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		IconType: "Market",
		time: 360,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		IconType: "Market",
		time: 480,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		IconType: "Market",
		time: 600,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		IconType: "Market",
		time: 720,
	},
];

function VideoTimeLine({ currentTime, setCurrentTime }: currentTimeProps) {
	const [centerIdx, setCenterIdx] = useState(0);
	const [isopen, setIsOpen] = useState(true);
	const refArr = useRef<HTMLDivElement[]>([]);
	const tagsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		for (let i = 1; i < mockData.length; i++) {
			console.log(i);
			if (
				mockData[i - 1].time <= currentTime &&
				currentTime < mockData[i].time
			) {
				refArr.current[i - 1].scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
				setCenterIdx(i - 1);
			}
		}
		if (mockData[mockData.length - 1].time < currentTime) {
			refArr.current[mockData.length - 1].scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
			setCenterIdx(mockData.length - 1);
		}
	}, [currentTime]);

	useEffect(() => {
		refArr.current[centerIdx].scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	}, [centerIdx]);

	return (
		<Container isOpen={isopen}>
			<div className="header">
				<span>여행 경로</span>
			</div>
			<TagsContainer isOpen={isopen}>
				<div className="scrollContainer" ref={tagsContainerRef}>
					{mockData.map((data, idx) => {
						return (
							<div
								ref={(el) => (refArr.current[idx] = el as HTMLDivElement)
								}
							>
								<TimeLineTag
									index={idx}
									isCenter={idx === centerIdx}
									setCenterIdx={setCenterIdx}
									setCurrentTime={setCurrentTime}
									{...data}
								/>
								{idx !== mockData.length - 1 && (
									<TimeLineTagLinker
										type={"bus"}
										time={"30분"}
									/>
								)}
							</div>
						);
					})}
				</div>
			</TagsContainer>
			<div
				className="footer"
				onClick={() => {
					setIsOpen((prev) => !prev);
				}}
			>
				<span>경로 접기</span>
				{isopen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
			</div>
		</Container>
	);
}

const Container = styled.div<{ isOpen: boolean }>`
	width: 100%;
	height: ${(props) => (props.isOpen ? "37vw" : "100px")};
	max-height: 720px;
	position: relative;

	transition: all 0.4s ease-in-out;
	border-radius: 10px;
	border: 0.5px solid #807b7b;

	.header {
		background-color: #f5f5f5;
		height: 50px;
		width: 100%;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;

		display: flex;
		justify-content: center;
		align-items: center;

		span {
			color: ${({ theme }) => theme.textPrimary};
			text-align: center;
			font-size: 21px;
			font-weight: 500;
		}
	}

	.footer {
		background-color: #f5f5f5;
		height: 50px;
		width: 100%;

		display: flex;
		gap: 8px;
		justify-content: center;
		align-items: center;

		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		transition: all 0.4s ease-in-out;
		cursor: pointer;

		span {
			color: ${({ theme }) => theme.textPrimary};
			text-align: center;
			font-size: 21px;
			font-weight: 500;
		}

		svg {
			color: ${({ theme }) => theme.textPrimary};
		}

		&:hover {
			background-color: ${({ theme }) => theme.titleSecondary};
			span {
				color: white;
			}
			svg {
				color: white;
			}
		}
	}
`;

const TagsContainer = styled.div<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
	height: ${(props) => (props.isOpen ? "calc(100% - 100px)" : "0px")};
	transition: height 0.4s ease-in-out;
	overflow-y: auto;
`;

export default VideoTimeLine;
