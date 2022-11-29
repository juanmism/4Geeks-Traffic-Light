import React, { useState } from "react";

import "../../styles/home.css";

function Home() {
	const [lightPus, listChange] = useState([
		"redLigthFlash",
		"yellowLigth",
		"greenLigth",
	]);

	function redLightPower() {
		listChange(["redLigthFlash", "yellowLigth", "greenLigth"]);
	}
	function yellowLightPower() {
		listChange(["redLigth", "yellowLigthFlash", "greenLigth"]);
	}
	function greenLightPower() {
		listChange(["redLigth", "yellowLigth", "greenLigthFlash"]);
	}
	console.log(lightPus);

	return (
		<div id="padre">
			<div id="container">
				<div className={lightPus[0]} onClick={redLightPower}></div>
				<div className={lightPus[1]} onClick={yellowLightPower}></div>
				<div className={lightPus[2]} onClick={greenLightPower}></div>
			</div>
		</div>
	);
}

export default Home;
