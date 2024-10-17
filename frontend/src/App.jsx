/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import monthService from "./service/months";

const handleMonthSelection = (month, setters) => {
	monthService.getMonth(month).then((result) => {
		console.log("resukt", result);

		setters.setSelectedMonth(result);
		setters.setCurrentDay(result.days[0].date);
	});
};

const Month = ({ month, setters }) => {
	return (
		<li onClick={() => handleMonthSelection(month, setters)}>{month}</li>
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
					<li key={act}> {act}</li>
				))}
			</ul>

			{nightActivities ? (
				<ul>
					{nightActivities.map((act) => (
						<li key={act}> {act}</li>
					))}
				</ul>
			) : (
				<></>
			)}

			<div onClick={() => handleDayChange(states, setters)}>
				Next -&gt;
			</div>
		</>
	);
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
