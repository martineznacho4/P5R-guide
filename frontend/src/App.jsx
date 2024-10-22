import { useEffect, useState } from "react";
import monthService from "./service/months";

import Month from "./components/Month";
import RenderMonth from "./components/RenderMonth";

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

const handleMonthSelection = (month, setters) => {
	monthService.getMonth(month).then((result) => {
		setters.setSelectedMonth(result);
		setters.setCurrentDay(result.days[0].date);
		const bodyElem = document.getElementsByTagName("body")		
		bodyElem[0].classList.add('body2')
	});
};

const handleBackMenu = (states, setters) => {
	setters.setSelectedMonth(null);
	const bodyElem = document.getElementsByTagName("body")		
		bodyElem[0].classList.remove('body2')
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
	const handlers = { handleBackMenu, handleDayChange, handleMonthSelection };

	return (
		<>
			{selectedMonth ? (
				<RenderMonth
					handlers={handlers}
					month={selectedMonth}
					states={states}
					setters={setters}
				/>
			) : (
				months.map((month) => (
					<Month
						key={month}
						month={month}
						setters={setters}
						handlers={handlers}
					/>
				))
			)}
		</>
	);
};

export default App;
