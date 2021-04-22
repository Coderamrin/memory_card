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
	// let cards = document.querySelectorAll(".card");
	// cards.forEach(card => {
	// 	console.log(card);
	// });
}

function CardGenerator() {
	const [score, setScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);

	function handleClick() {
		randomCardGenerator();

	} 

	return (
		<div>
			<ScoreTracker cScore={score} hScore={highestScore} /> 
			<div className="cards">
				<div className="card">
	 				<img src={Images.TapuKokoV} alt="TapuKokoV"/>
	 				<span>Tapu KOKO V</span> 
				</div>

				<div className="card">
	 				<img src={Images.SingleStrikeUrshifu} alt="TapuKokoV"/>
	 				<span>single strike urshifu</span>  
				</div> 
				<div className="card">
	 				<img src={Images.ZygardeEx} alt="TapuKokoV"/>
	 				<span>Zygarde Ex</span>  
				</div> 

				<div className="card">
	 				<img src={Images.JolteonEx} alt="TapuKokoV"/>
	 				<span>Jolteon Ex</span> 
				</div> 

				<div className="card">
	 				<img src={Images.MLucario} alt="TapuKokoV"/>
	 				<span>M Lucario</span> 
				</div> 

				<div className="card">
	 				<img src={Images.MManectricEx} alt="TapuKokoV"/>
	 				<span>M Manectric Ex</span> 
				</div> 

				<div className="card">
	 				<img src={Images.TapuKokoVmax} alt="TapuKokoV"/>
	 				<span>Tapu KOKO Vmax</span> 
				</div> 

				<div className="card">
	 				<img src={Images.RapidStrikeUrshifuVMAX} alt="TapuKokoV"/>
	 				<span>Rapid Strike Urshifu VMAX</span> 
				</div>

				<div className="card">
	 				<img src={Images.RapidStrikeUrshifuV} alt="TapuKokoV"/>
	 				<span>Rapid Strike Urshifu V</span> 
				</div> 

				<div className="card">
	 				<img src={Images.FlappleVmax} alt="TapuKokoV"/>
	 				<span>Flapple Vmax</span> 
				</div>  		
			</div>	 
		</div>
		);  
}
 
export { CardGenerator, randomCardGenerator };  
