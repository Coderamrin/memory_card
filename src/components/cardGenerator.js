import React from "react";
import Images from "../cards"; 
import ScoreTracker from "./scoreTracker"; 

const cardsArray = [
		[
			Images.TapuKokoV,
			"Tapu KOKO V"
		],

		[
			Images.SingleStrikeUrshifu,
			"Single Strike Urshifu V" 
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
			"M Lucario Ex"
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
		img.alt = cardsArray[index][1];
		description.textContent = cardsArray[index][1];   
	});
}

function Cards(props) { 
	return (
		<div>
			<ScoreTracker cScore={props.score} hScore={props.highestScore} /> 
			<div className="cards">
				<div onClick={props.handleClick} className="card">
	 				<img src={Images.TapuKokoV} alt= {cardsArray[0][1]}  />
	 				<span>Tapu KOKO V</span> 
				</div>

				<div onClick={props.handleClick} className="card">
	 				<img src={Images.SingleStrikeUrshifu} alt= {cardsArray[1][1]}  />
	 				<span>single strike urshifu V</span>   
				</div> 

				<div onClick={props.handleClick} className="card">
	 				<img src={Images.ZygardeEx} alt={cardsArray[2][1]} /> 
					<span>Zygarde Ex</span>  
				</div> 

				<div onClick={props.handleClick} className="card">
	 				<img src={Images.JolteonEx} alt={cardsArray[3][1]} />
					<span>Jolteon Ex</span> 
				</div> 		
			</div>	 
		</div>
		);  
}
  
export { Cards, randomCardGenerator };  
