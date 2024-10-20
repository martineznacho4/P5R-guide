/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import monthService from "./service/months";
import april from "./assets/april.svg";
import may from "./assets/may.svg";
import june from "./assets/june.svg";
import july from "./assets/july.svg";
import august from "./assets/august.svg";
import september from "./assets/september.svg";
import october from "./assets/october.svg";

const monthSVG = { april, may, june, july,august,september,october};

const handleMonthSelection = (month, setters) => {
	monthService.getMonth(month).then((result) => {
		console.log("resukt", result);

		setters.setSelectedMonth(result);
		setters.setCurrentDay(result.days[0].date);
	});
};

const Month = ({ month, setters }) => {
	return (
		<div className="navbar">
			<a	className="link-wrapper"onClick={() => handleMonthSelection(month, setters)}>
				
				<span className="fallback">Month</span>
				<div className="img-wrapper">
					<img className="normal" src={monthSVG[month]} alt="" />
					<img className="active" src={monthSVG[month]} alt="" />
				</div>

				<div className="shape-wrapper">
					<div className="shape red-fill jelly">
						<svg
							x="0px"
							y="0px"
							viewBox="0 0 108.1 47"
							enableBackground="new 0 0 108.1 47"
						>
							<polygon
								fill="#FF0000"
								points="29.5,8.5 150.7,0 108.1,32.7 3.1,47 "
							/>
						</svg>
					</div>

					<div className="shape cyan-fill jelly">
						<svg
							x="0px"
							y="0px"
							viewBox="0 0 108.1 47"
							enableBackground="new 0 0 108.1 47"
						>
							<polygon
								fill="#00FFFF"
								points="0.3,17 125.1,0 68.8,45.6 24.3,39 "
							/>
						</svg>
					</div>
				</div>
			</a>
		</div>
	);
};

const getNextMonth = (states, setters) => {
	const id = states.selectedMonth.id;

	monthService.getMonthByID(id + 1).then((result) => {
		setters.setSelectedMonth(result);
	});
};

const handleDayChange = (states, setters) => {
	if (states.selectedMonth.month === "april" && states.currentDay < 30) {
		setters.setCurrentDay(states.currentDay + 1);
	} else if (states.currentDay < states.selectedMonth.days.length) {
		setters.setCurrentDay(states.currentDay + 1);
	} else {
		setters.setCurrentDay(1);
		setters.setSelectedMonth(getNextMonth(states, setters));
	}
};

const Day = ({ content, states, setters }) => {
	const dayActivities = content.day.split(";");
	let nightActivities;
	if (content.night) {
		nightActivities = content.night.split(";");
	}

	return (
		<>
			<ul>
				{dayActivities.map((act) => (
					<li key={act} className="activity">
						{" "}
						{act}
					</li>
				))}
			</ul>

			{nightActivities ? (
				<ul>
					{nightActivities.map((act) => (
						<li key={act} className="activity">
							{" "}
							{act}
						</li>
					))}
				</ul>
			) : (
				<></>
			)}

			<div onClick={() => handleDayChange(states, setters)}>
				Next -&gt;
			</div>
			<div onClick={() => handleBackMenu(states, setters)}>
				back to main menu
			</div>
		</>
	);
};

const handleBackMenu = (states, setters) => {
	setters.setSelectedMonth(null);
};

const RenderMonth = ({ month, states, setters }) => {
	const day = month.days.find((day) => day.date === states.currentDay);

	return (
		<>
			<div>{month.month}</div>

			<Day content={day.content} setters={setters} states={states} />
		</>
	);
};

const App = () => {
	useEffect(() => {
		monthService.getAllMonths().then((response) => {
			setMonths(response);
		});
	}, []);

	const [months, setMonths] = useState([]);
	const [selectedMonth, setSelectedMonth] = useState(null);
	const [currentDay, setCurrentDay] = useState(null);

	const states = { months, selectedMonth, currentDay };
	const setters = { setMonths, setSelectedMonth, setCurrentDay };

	return (
		<>
			{selectedMonth ? (
				<RenderMonth
					month={selectedMonth}
					states={states}
					setters={setters}
				/>
			) : (
				months.map((month) => (
					<Month key={month} month={month} setters={setters} />
				))
			)}
		</>
	);
};

export default App;
