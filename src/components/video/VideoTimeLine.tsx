import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import TimeLineTag from "./TimeLineTag";
import TimeLineTagLinker from "./TimeLineTagLinker";

//svg
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import MarketIcon from "../../assets/svg/placetType/MarketIcon.svg";

type currentTimeProps = {
	currentTime: number;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
};

const mockData = [
	{
		place: "용두산공원",
		placeType: "공원",
		Icon: <MarketIcon />,
		time: 10,
	},
	{
		place: "에슐리퀸즈",
		placeType: "기차역",
		Icon: <MarketIcon />,
		time: 120,
	},
	{
		place: "부경대학교",
		placeType: "기차역",
		Icon: <MarketIcon />,
		time: 240,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		Icon: <MarketIcon />,
		time: 360,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		Icon: <MarketIcon />,
		time: 480,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		Icon: <MarketIcon />,
		time: 600,
	},
	{
		place: "흰여울문화마을",
		placeType: "기차역",
		Icon: <MarketIcon />,
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
			if (
				mockData[i - 1].time <= currentTime &&
				currentTime < mockData[i].time
			) {
				if (centerIdx !== i - 1) {
					tagsContainerRef.current?.scrollTo({
						top: centerIdx * 116 - 160,
						left: 0,
						behavior: "smooth",
					});
					setCenterIdx(i - 1);
				}
			}
		}
		if (mockData[mockData.length - 1].time < currentTime) {
			if (centerIdx !== mockData.length - 1) {
				tagsContainerRef.current?.scrollTo({
					top: centerIdx * 116 - 160,
					left: 0,
					behavior: "smooth",
				});
				setCenterIdx(mockData.length - 1);
			}
		}
	}, [currentTime]);

	useEffect(() => {
		tagsContainerRef.current?.scrollTo({
			top: centerIdx * 116 - 160,
			left: 0,
			behavior: "smooth",
		});
	}, [centerIdx]);

	return (
		<Container isOpen={isopen}>
			<div className="header">
				<span>여행 경로</span>
			</div>
			<TagsContainer isOpen={isopen} ref={tagsContainerRef}>
				<div className="scrollContainer">
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

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(138, 139, 138, 0.8);
		border-radius: 10px; /* 스크롤바 둥근 테두리 */
	}

	&::-webkit-scrollbar-track {
		background: rgba(35, 37, 36, 0.1); /*스크롤바 뒷 배경 색상*/
	}
`;

export default VideoTimeLine;
