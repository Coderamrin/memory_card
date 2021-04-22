import React,{useState} from "react";
import Images from "../cards"; 
import ScoreTracker from "./scoreTracker" 

const cardsArray = [
		[
			Images.TapuKokoV,
			"Tapu KOKO V"
		],

		[
			Images.SingleStrikeUrshifu,
			"Single Strike Urshifu"
		],

		[
			Images.ZygardeEx,
			"Zygarde Ex"
		],

		[
			Images.JolteonEx,
			"Jolteon Ex"
		],

		[
			Images.MLucario,
			"M Lucario"
		],

		[
			Images.MManectricEx,
			"M Manectric Ex"
		],

		[
			Images.TapuKokoVmax,
			"Tapu Koko Vmax"
		],

		[
			Images.RapidStrikeUrshifuVMAX,
			"Rapid Strike Urshifu VMAX"
		],

		[
			Images.RapidStrikeUrshifuV,
			"Rapid Strike Urshifu V"
		],

		[
			Images.FlappleVmax,
			"Flapple Vmax"
		] 

];   

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function randomCardGenerator() {
	let cards = document.querySelectorAll(".card");

	cards.forEach(card => {
		let index = getRndInteger(0, 10);
		let img = card.childNodes[0];
		let description = card.childNodes[1];
		
		img.src = cardsArray[index][0];
		description.textContent = cardsArray[index][1];   
	});
}

function CardGenerator() {
	const [score, setScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);

	function handleClick(e) {
		randomCardGenerator();
		setScore(score + 1);
	} 

	return (
		<div>
			<ScoreTracker cScore={score} hScore={highestScore} /> 
			<div className="cards">
				<div onClick={handleClick} className="card">
	 				<img src={Images.TapuKokoV} alt="TapuKokoV"/>
	 				<span>Tapu KOKO V</span> 
				</div>

				<div onClick={handleClick} className="card">
	 				<img src={Images.SingleStrikeUrshifu} alt="SingleStrikeUrshifu"/>
	 				<span>single strike urshifu</span>  
				</div> 

				<div onClick={handleClick} className="card">
	 				<img src={Images.ZygardeEx} alt="ZygardeEx"/>
	 				<span>Zygarde Ex</span>  
				</div> 

				<div onClick={handleClick} className="card">
	 				<img src={Images.JolteonEx} alt="JolteonEx"/>
	 				<span>Jolteon Ex</span> 
				</div> 

				<div onClick={handleClick} className="card">
	 				<img src={Images.MLucario} alt="MLucario"/>
	 				<span>M Lucario</span> 
				</div> 

				<div onClick={handleClick} className="card">
	 				<img src={Images.MManectricEx} alt="MManectricEx"/>
	 				<span>M Manectric Ex</span> 
				</div> 

				<div onClick={handleClick} className="card">
	 				<img src={Images.TapuKokoVmax} alt="TapuKokoVmax"/>
	 				<span>Tapu KOKO Vmax</span> 
				</div> 

				<div onClick={handleClick} className="card">
	 				<img src={Images.RapidStrikeUrshifuVMAX} alt="RapidStrikeUrshifuVMAX"/>
	 				<span>Rapid Strike Urshifu VMAX</span> 
				</div>

				<div onClick={handleClick} className="card">
	 				<img src={Images.RapidStrikeUrshifuV} alt="RapidStrikeUrshifuV"/>
	 				<span>Rapid Strike Urshifu V</span> 
				</div> 

				<div onClick={handleClick} className="card">
	 				<img src={Images.FlappleVmax} alt="FlappleVmax"/>
	 				<span>Flapple Vmax</span> 
				</div>  		
			</div>	 
		</div>
		);  
}
 
export { CardGenerator, randomCardGenerator };  
