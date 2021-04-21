import React from 'react'; 
import { CardGenerator, randomCardGenerator } from "./components/cardGenerator";
import ScoreTracker from "./components/scoreTracker";

function App() {
	randomCardGenerator();
	return <>
		<header>
			<h1>Memory Game</h1> 
		</header>
		<CardGenerator/>
	</>
}

export default App;   
  