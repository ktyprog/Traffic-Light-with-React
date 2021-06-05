import React, { Fragment, useState } from "react";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");

	const handleClick = e => {
		const origen = e.target.id;
		setColor(origen);
	};

	const getSelected = (classes, origen) => {
		if (origen === color) {
			return classes + " selected";
		} else {
			return classes;
		}
	};

	return (
		<div className="container">
			<div className="trafficTop"></div>
			<div className="lights">
				<div
					id="red"
					className={getSelected(
						"bg-danger rounded-circle light",
						"red"
					)}
					onClick={e => {
						handleClick(e);
					}}></div>
				<div
					id="yellow"
					className={getSelected(
						"bg-warning rounded-circle light",
						"yellow"
					)}
					onClick={e => {
						handleClick(e);
					}}></div>
				<div
					id="green"
					className={getSelected(
						"bg-success rounded-circle light",
						"green"
					)}
					onClick={e => {
						handleClick(e);
					}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;