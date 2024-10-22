/* eslint-disable react/prop-types */

const Day = ({ content, states, setters, handlers }) => {
	const dayActivities = content.day.split(";");
	let nightActivities;
	if (content.night) {
		nightActivities = content.night.split(";");
	}

	return (
		<div className="act-wrapper">
			<ul>
				{dayActivities.map((act) => (
					<div key={act} className="wrp">
						<li className="activity"> {act}</li>
					</div>
				))}
			</ul>

			{nightActivities ? (
				<ul>
					{nightActivities.map((act) => (
						<div key={act} className="wrp">
							<li className="activity"> {act}</li>
						</div>
					))}
				</ul>
			) : (
				<></>
			)}

			<div onClick={() => handlers.handleDayChange(states, setters)}>
				Next -&gt;
			</div>
			<div onClick={() => handlers.handleBackMenu(states, setters)}>
				back to main menu
			</div>
		</div>
	);
};

export default Day;
