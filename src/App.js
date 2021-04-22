import React, {useState} from 'react'; 
import { Cards, randomCardGenerator } from "./components/cardGenerator";  

function App() {
	const [score, setScore] = useState(0);
	const [clickedCards, setClickedcard] = useState([]);
	const [highestScore, setHighestScore] = useState(0);

	function handleClick(e) { 
		
		if (clickedCards.includes(e.target.alt)) {
			if (score > highestScore) {
				setHighestScore(score); 
			}
			setClickedcard([]);
			setScore(0);
		} else {
			clickedCards.push(e.target.alt);
			setScore(score + 1);
		}

		randomCardGenerator();
	}

	return <>
		<header>
			<h1>Memory Game</h1>
			<p>click on the Image to get score</p>  
		</header>
		<Cards 
		handleClick={handleClick}
		score={score} 
		highestScore={highestScore} 
		/>
	</>
}

export default App;  
