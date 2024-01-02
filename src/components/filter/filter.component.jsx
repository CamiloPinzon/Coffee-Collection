import { ButtonsContainer, FilterButton } from "./filter.styles";

const FilterComponent = () => {
	return (
		<ButtonsContainer>
			<FilterButton>All Products</FilterButton>
			<FilterButton>Aviable Now</FilterButton>
		</ButtonsContainer>
	);
};

export default FilterComponent;
