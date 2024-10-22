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

			<div className="controls">
				<img
					src="src/assets/menu.svg"
					alt=""
					onClick={() => handlers.handleBackMenu(states, setters)}
				/>

				<img
					src="src/assets/arrow.svg"
					alt=""
					onClick={() => handlers.handleDayChange(states, setters)}
				/>
			</div>
		</div>
	);
};

export default Day;
