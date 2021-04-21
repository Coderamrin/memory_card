import React,{useState} from "react";
import Images from "../cards";
import ScoreTracker from "./scoreTracker" 

let imgArr = [
	Images.TapuKokoV,
	Images.SingleStrikeUrshifu,
	Images.ZygardeEx,
	Images.JolteonEx,
	Images.MLucario,
	Images.MManectricEx,
	Images.TapuKokoVmax,
	Images.RapidStrikeUrshifuVMAX,
	Images.RapidStrikeUrshifuV,
	Images.FlappleVmax 
]

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function randomCardGenerator() {
	let imgs = document.querySelectorAll(".card");
	imgs.forEach(img => {
		const index = getRndInteger(0, 10);
		img.src= imgArr[index];
	});
}

function CardGenerator() {
	const [score, setScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);

	const [Cc1, setCc1] = useState(0); 
	const [Cc2, setCc2] = useState(0); 
	const [Cc3, setCc3] = useState(0); 
	const [Cc4, setCc4] = useState(0); 
	const [Cc5, setCc5] = useState(0); 
	const [Cc6, setCc6] = useState(0); 
	const [Cc7, setCc7] = useState(0); 
	const [Cc8, setCc8] = useState(0); 
	const [Cc9, setCc9] = useState(0); 
	const [Cc10, setCc10] = useState(0); 

	function handleClick(click, setClick) {
		randomCardGenerator();
		setClick( click + 1);
		setScore(score + 1);  

		if (Cc1 > 1 || Cc2 > 1 || Cc3 > 1 || Cc4 > 1 || Cc5 > 1 || Cc6 > 1 || Cc7 > 1 || Cc8 > 1 || Cc9 > 1 || Cc10 > 1) {

			setHighestScore(score);
			setScore(0);
			setCc1(0); 
			setCc2(0); 
			setCc3(0); 
			setCc4(0); 
			setCc5(0); 
			setCc6(0); 
			setCc7(0); 
			setCc8(0); 
			setCc9(0); 
			setCc10(0); 
		}
	}

	return (
		<div>
			<ScoreTracker cScore={score} hScore={highestScore} />   
			<div className="cards">
				<img onClick={() => {
					handleClick(Cc1, setCc1);
				}} className="card" alt="card"  src={imgArr[0]}/>

				<img onClick={() => {
					handleClick(Cc2, setCc2);
				}} className="card" alt="card"  src={imgArr[1]}/>

				<img onClick={() => {
					handleClick(Cc3, setCc3);
				}} className="card" alt="card"  src={imgArr[2]}/>

				<img onClick={() => {
					handleClick(Cc4, setCc4);
				}} className="card" alt="card"  src={imgArr[3]}/>

				<img onClick={() => {
					handleClick(Cc5, setCc5);
				}} className="card" alt="card"  src={imgArr[4]}/>

				<img onClick={() => {
					handleClick(Cc6, setCc6);
				}} className="card" alt="card"  src={imgArr[5]}/>

				<img onClick={() => {
					handleClick(Cc7, setCc7);
				}} className="card" alt="card"  src={imgArr[6]}/>

				<img onClick={() => {
					handleClick(Cc8, setCc8);
				}} className="card" alt="card"  src={imgArr[7]}/>

				<img onClick={() => {
					handleClick(Cc9, setCc9);
				}} className="card" alt="card"  src={imgArr[8]}/>

				<img onClick={() => {
					handleClick(Cc10, setCc10);
				}} className="card" alt="card"  src={imgArr[9]}/>							
			</div>
		</div>
		);  
}
 
export { CardGenerator, randomCardGenerator };  
