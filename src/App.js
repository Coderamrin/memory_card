import React from 'react'; 
import { CardGenerator, randomCardGenerator } from "./components/cardGenerator";
import ScoreTracker from "./components/scoreTracker";

function App() {
	randomCardGenerator();
	return <>
		<CardGenerator/>

	</>
}

export default App;   
  