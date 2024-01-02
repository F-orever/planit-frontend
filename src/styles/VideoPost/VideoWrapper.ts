import styled from "styled-components";

export const YoutubeVideoWrapper = styled.video`
	position: relative;
	width: calc(100vw / 3 * 2);
	height: 37vw;

	@media (max-width: 490px) {
		width: 100vw;
		height: 200px;
	}
`;
