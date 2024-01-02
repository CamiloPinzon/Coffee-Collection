import AppHeader from "./components/header/header.component";
import Coffees from "./components/coffees/coffees.component";

import { AppBlock, AppContainer } from "./app.styles";

function App() {
	return (
		<AppBlock>
			<AppContainer>
				<AppHeader />
				<Coffees />
			</AppContainer>
		</AppBlock>
	);
}

export default App;
