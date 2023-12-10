import styled from "styled-components";
import Slider from "react-slick";

export const PlacesSlider = styled(Slider)`
	width: calc(100vw / 3 * 2);

	@media (max-width: 490px) {
		width: 100vw;
	}
`;
