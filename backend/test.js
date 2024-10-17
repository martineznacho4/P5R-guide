const months = require("./data");

const a = months.map((month) => month.month);
console.log(a);

const days = [
	{
		date: 9,

		content: {
			day: "Leave the metro into the Backstreets;Go to Sojiro's residence and examine the doorbell;Go to Café LeBlanc and enter;Examine your room and then start cleaning.",
			night: "Examine the bed to sleep;During the flashback, follow the road.",
		},
	},
	{
		date: 10,
        content: {
			day: "Go downstairs and answer the pay phone;Step outside LeBlanc and then go back inside to flip the sign to CLOSED.",
			night: null,
		},
	},
];

let b = "aaaaa,f";

days.map((day) => (console.log(day.content.day)
))