import styled from "styled-components";

export const SliderContainer = styled.div<{
	width?: number;
	height?: number;
}>`
	position: relative;
	width: ${({ width }) => (width ? width : "100%")};
	height: ${({ height }) => (height ? height : "100%")};
`;

export const ArrowButton = styled.button<{
	direction?: string;
	showArrows?: boolean;
}>`
	position: fixed;
	${({ direction }) =>
		direction === "left" ? "left: 10px;" : "right: 10px;"}
`;
