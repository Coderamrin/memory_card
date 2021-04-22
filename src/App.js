import React, {useEffect} from 'react'; 
import { CardGenerator, randomCardGenerator } from "./components/cardGenerator";  

function App() {
	useEffect(() => {
		randomCardGenerator();
	});

	return <>
		<header>
			<h1>Memory Game</h1> 
		</header>
		<CardGenerator/>
	</>
}

export default App;    
  