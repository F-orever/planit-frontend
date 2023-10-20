import { createGlobalStyle } from "styled-components";

import PretendardWOFF from "../assets/Pretendard/Pretendard-Black.woff";
import PretendardWOFFExtraBold from "../assets/Pretendard/Pretendard-ExtraBold.woff";
import PretendardWOFFBold from "../assets/Pretendard/Pretendard-Bold.woff";
import PretendardWOFFSemiBold from "../assets/Pretendard/Pretendard-SemiBold.woff";
import PretendardWOFFMedium from "../assets/Pretendard/Pretendard-Medium.woff";
import PretendardWOFFRegular from "../assets/Pretendard/Pretendard-Regular.woff";
import PretendardWOFFLight from "../assets/Pretendard/Pretendard-Light.woff";
import PretendardWOFFExtraLight from "../assets/Pretendard/Pretendard-ExtraLight.woff";
import PretendardWOFFThin from "../assets/Pretendard/Pretendard-Thin.woff";

import NotoSansWOFF from "../assets/NotoSans/NotoSans-Black.woff";
import NotoSansWOFFExtraBold from "../assets/NotoSans/NotoSans-ExtraBold.woff";
import NotoSansWOFFBold from "../assets/NotoSans/NotoSans-Bold.woff";
import NotoSansWOFFSemiBold from "../assets/NotoSans/NotoSans-SemiBold.woff";
import NotoSansWOFFMedium from "../assets/NotoSans/NotoSans-Medium.woff";
import NotoSansWOFFRegular from "../assets/NotoSans/NotoSans-Regular.woff";
import NotoSansWOFFLight from "../assets/NotoSans/NotoSans-Light.woff";
import NotoSansWOFFExtraLight from "../assets/NotoSans/NotoSans-ExtraLight.woff";
import NotoSansWOFFThin from "../assets/NotoSans/NotoSans-Thin.woff";

const GlobalFont = createGlobalStyle`	
	@font-face {
		font-family: 'Pretendard';
		font-weight: 900;
		font-display: swap;
		src:local("PretendardWOFF"), url(${PretendardWOFF}), format('woff');
	}

	@font-face {
		font-family: 'PretendardWOFFExtraBold';
		font-weight: 800;
		font-display: swap;
		src:local("PretendardWOFFExtraBold"), url(${PretendardWOFFExtraBold}), format('woff');
	}

	@font-face {
		font-family: 'PretendardWOFFBold';
		font-weight: 700;
		font-display: swap;
		src:local("PretendardWOFFBold"), url(${PretendardWOFFBold}), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 600;
		font-display: swap;
		src:local("PretendardWOFFSemiBold"), url(${PretendardWOFFSemiBold}), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 500;
		font-display: swap;
		src:local("PretendardWOFFMedium"), url(${PretendardWOFFMedium}), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 400;
		font-display: swap;
		src:local("PretendardWOFFRegular"), url(${PretendardWOFFRegular}), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 300;
		font-display: swap;
		src:local("PretendardWOFFLight"), url(${PretendardWOFFLight}), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 200;
		font-display: swap;
		src:local("PretendardWOFFExtraLight"), url(${PretendardWOFFExtraLight}), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 100;
		font-display: swap;
		src:local("PretnedardWOFFThin"), url(${PretendardWOFFThin}), format('woff');
	}

	
	@font-face {
		font-family: 'NotoSans';
		font-weight: 900;
		font-display: swap;
		src:local("NotoSansWOFF"), url(${NotoSansWOFF}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSansWOFFExtraBold';
		font-weight: 800;
		font-display: swap;
		src:local("NotoSansWOFFExtraBold"), url(${NotoSansWOFFExtraBold}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSansWOFFBold';
		font-weight: 700;
		font-display: swap;
		src:local("NotoSansWOFFBold"), url(${NotoSansWOFFBold}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 600;
		font-display: swap;
		src:local("NotoSansWOFFSemiBold"), url(${NotoSansWOFFSemiBold}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 500;
		font-display: swap;
		src:local("NotoSansWOFFMedium"), url(${NotoSansWOFFMedium}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 400;
		font-display: swap;
		src:local("NotoSansWOFFRegular"), url(${NotoSansWOFFRegular}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 300;
		font-display: swap;
		src:local("NotoSansWOFFLight"), url(${NotoSansWOFFLight}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 200;
		font-display: swap;
		src:local("NotoSansWOFFExtraLight"), url(${NotoSansWOFFExtraLight}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 100;
		font-display: swap;
		src:local("PretnedardWOFFThin"), url(${NotoSansWOFFThin}), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}
`;

export default GlobalFont;