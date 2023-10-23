import React from 'react';
import styled from 'styled-components';

function FixedHeader() {
	return(
		<StyledHeader>
			<a>이용하신 후에 여기를 눌러주세요</a>
		</StyledHeader>
	);
}

const StyledHeader = styled.div`
	width:100%;
	height:60px;

	background-color:${({theme}) => theme.primary};
	color:white;
	font-size:24px;
	font-weight:600;

	display:flex;
	justify-content:center;
	align-items:center;

	position:fixed;
	top:0px;
	z-index:10;

	a{
		cursor:pointer;
	}
`

export default FixedHeader;