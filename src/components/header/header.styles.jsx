import styled from "styled-components";

import { SeaShell, SonicSilver } from "../../utils/colors";

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url("../../assets/images/vector.svg");
`;

export const HeaderTitle = styled.h1`
	color: ${SeaShell};
	font-size: 2rem;
`;

export const HeaderDescription = styled.p`
	color: ${SonicSilver};
	text-align: center;
	font-size: 1rem;
	max-width: 500px;
`;
