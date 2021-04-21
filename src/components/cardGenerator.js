import React from "react";
import Images from "../cards";


const imgArr = [
	Images.Riolu,
	Images.Victini,
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

function handleClick(e) {
	console.log(imgArr);
}

function CardGenerator() {
	return (
		<div className="cards">
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[0]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[1]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[2]}/>
			<img onClick={handleClick} className="card"  alt="card" src={imgArr[3]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[4]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[5]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[6]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[7]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[8]}/>
			<img onClick={handleClick} className="card" alt="card"  src={imgArr[9]}/>
		</div>

		); 
}

export default CardGenerator;  
