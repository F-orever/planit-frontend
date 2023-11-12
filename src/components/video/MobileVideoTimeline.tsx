import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import MobileTimeLineTag from "./MobileTimeLineTag";
import MobileTimeLineTagLinker from "./MobileTimeLineTagLinker";

//svg
import { mockData } from "./mockData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { timelineIdx } from "../../recoil/timelineIdx";
import { placeDetailSliderIdx } from "../../recoil/placeDetailSliderIdxState";

function MobileVideoTimeline() {
	const index = useRecoilValue(timelineIdx);
	const setDetailsIdx = useSetRecoilState(placeDetailSliderIdx);
	const refArr = useRef<HTMLDivElement[]>([]);
	const tagsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tagsContainerRef.current?.scrollTo({
			left: index * 190 - 200,
			top: 0,
			behavior: "smooth",
		});
	}, [index]);

	return (
		<MobileTagsContainer>
			<div className="scrollContainer" ref={tagsContainerRef}>
				{mockData.map((data, idx) => {
					return (
						<div
							key={idx}
							ref={(el) => (refArr.current[idx] = el as HTMLDivElement)
							}
							style={{
								display: "flex",
							}}
						>
							<MobileTimeLineTag
								index={idx}
								iscenter={idx === index}
								{...data}
							/>
							{idx !== mockData.length - 1 && (
								<MobileTimeLineTagLinker
									type={"bus"}
									time={"30분"}
								/>
							)}
						</div>
					);
				})}
			</div>
		</MobileTagsContainer>
	);
}

const MobileTagsContainer = styled.div`
	width: 100vw;
	height: 100px;
	position: relative;

	border-bottom: 1.3px solid rgba(128, 123, 123, 0.2);

	.scrollContainer {
		width: 100%;
		height: 100%;

		background-color: #f9f9f9;

		display: flex;
		align-items: center;
		overflow-x: auto;
	}
`;

export default MobileVideoTimeline;
