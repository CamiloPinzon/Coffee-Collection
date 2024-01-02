import styled from "styled-components";
import { SeaShell, SonicSilver } from "../../utils/colors";

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 50px;
	justify-content: center;
`;

export const FilterButton = styled.button`
	color: ${SeaShell};
	background-color: transparent;
	border: none;
	border-radius: 10px;
	padding: 8px 13px;
	cursor: pointer;

	&:hover,
	:active {
		background-color: ${SonicSilver};
	}
`;
