import {
	HeaderContainer,
	HeaderTitle,
	HeaderDescription,
} from "./header.styles";

const AppHeader = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>Our Collection</HeaderTitle>
			<HeaderDescription>
				Introducing our Coffee Collection, a selection of unique coffees from
				different roast types and origins, expertly roasted in small batches and
				shipped fresh weekly.
			</HeaderDescription>
		</HeaderContainer>
	);
};

export default AppHeader;
