/* eslint-disable react/prop-types */
import Date from "./Date";
import Day from "./Day";

const RenderMonth = ({ month, states, setters, handlers }) => {
	const day = month.days.find((day) => day.date === states.currentDay);

	return (
		<div id="DayCard">
			<div className="header">
				<img src={`src/assets/${month.month}.svg`} className="monthImage" alt="" />
				<Date day={day.date} />
			</div>

			<Day
				content={day.content}
				setters={setters}
				states={states}
				handlers={handlers}
			/>
		</div>
	);
};

export default RenderMonth;
