import styled from "styled-components";
import { bgSectionColor } from "./utils/colors";

export const AppBlock = styled.div`
	display: flex;
	justify-content: center;
`;

export const AppContainer = styled.div`
	background-color: ${bgSectionColor};
	border-radius: 20px;
	margin-top: 135px;
	padding: 10px 30px;
`;
