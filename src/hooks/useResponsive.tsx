import { useMediaQuery } from "react-responsive";

function useResponsive() {
	const isMobile: boolean = useMediaQuery({
		query: "(max-width:490px)",
	});

	return {
		isMobile,
	};
}

export default useResponsive;
