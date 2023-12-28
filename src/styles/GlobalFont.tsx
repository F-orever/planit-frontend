import { createGlobalStyle } from "styled-components";

const GlobalFont = createGlobalStyle`	
	@font-face {
		font-family: 'Pretendard';
		font-weight: 900;
		font-display: swap;
		src:local("PretendardWOFF"), url("../assets/Pretendard/Pretendard-Black.woff"), format('woff');
	}

	@font-face {
		font-family: 'PretendardWOFFExtraBold';
		font-weight: 800;
		font-display: swap;
		src:local("PretendardWOFFExtraBold"), url("../assets/Pretendard/Pretendard-ExtraBold.woff"), format('woff');
	}

	@font-face {
		font-family: 'PretendardWOFFBold';
		font-weight: 700;
		font-display: swap;
		src:local("PretendardWOFFBold"), url("../assets/Pretendard/Pretendard-Bold.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 600;
		font-display: swap;
		src:local("PretendardWOFFSemiBold"), url("../assets/Pretendard/Pretendard-SemiBold.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 500;
		font-display: swap;
		src:local("PretendardWOFFMedium"), url("../assets/Pretendard/Pretendard-Medium.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 400;
		font-display: swap;
		src:local("PretendardWOFFRegular"), url("../assets/Pretendard/Pretendard-Regular.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 300;
		font-display: swap;
		src:local("PretendardWOFFLight"), url("../assets/Pretendard/Pretendard-Light.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 200;
		font-display: swap;
		src:local("PretendardWOFFExtraLight"), url("../assets/Pretendard/Pretendard-ExtraLight.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 100;
		font-display: swap;
		src:local("PretnedardWOFFThin"), url("../assets/Pretendard/Pretendard-Thin.woff"), format('woff');
	}

	
	@font-face {
		font-family: 'NotoSans';
		font-weight: 900;
		font-display: swap;
		src:local("NotoSansWOFF"), url("../assets/Pretendard/NotoSansKR-Black.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSansWOFFExtraBold';
		font-weight: 800;
		font-display: swap;
		src:local("NotoSansWOFFExtraBold"), url("../assets/Pretendard/NotoSansKR-ExtraBold.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSansWOFFBold';
		font-weight: 700;
		font-display: swap;
		src:local("NotoSansWOFFBold"), url("../assets/Pretendard/NotoSansKR-Bold.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 600;
		font-display: swap;
		src:local("NotoSansWOFFSemiBold"), url("../assets/Pretendard/NotoSansKR-SemiBold.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 500;
		font-display: swap;
		src:local("NotoSansWOFFMedium"), url("../assets/Pretendard/NotoSansKR-Medium.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 400;
		font-display: swap;
		src:local("NotoSansWOFFRegular"), url("../assets/Pretendard/NotoSansKR-Regular.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 300;
		font-display: swap;
		src:local("NotoSansWOFFLight"), url("../assets/Pretendard/NotoSansKR-Light.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 200;
		font-display: swap;
		src:local("NotoSansWOFFExtraLight"), url("../assets/Pretendard/NotoSansKR-ExtraLight.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}

	@font-face {
		font-family: 'NotoSans';
		font-weight: 100;
		font-display: swap;
		src:local("PretnedardWOFFThin"), url("../assets/Pretendard/NotoSansKR-Thin.woff"), format('woff');
      	unicode-range: U+0041-005A, U+0061-007A;
	}
`;

export default GlobalFont;
