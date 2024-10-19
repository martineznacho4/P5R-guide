const months = [
	{
		id: 1,
		month: "april",
		days: [
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
			{
				date: 11,
				content: {
					day: "Go downstairs and speak with Sojiro;Leave LeBlanc and make your way to Yongen-Jaya Station;Ride the train and then go upstairs to enter Shibuya Underground Walkway;Head north, up the big staircase, and exit the building into Shibuya Station Square;Right in front of you is the Teikyu building;Enter the Ginza Line Gate and ride the train;First Castle Infiltration;There is nothing to do inside  Palace for now. Just follow the tutorials;At Shujin Academy, go to the second floor. In front of the stairs to the left is the Faculty Office;After the scene, make your way to the rooftop.",
					night: null,
				},
			},
			{
				date: 12,
				content: {
					day: "Enter Shujin Academy;During class and on specific days in the game, teachers will ask you questions. These questions are not randomized, and when you answer correctly, you will gain points towards Knowledge or Charm. Today’s answer is “Villains”. Knowledge +1;Second Castle Infiltration;Once again there will be restrictions to what you can do inside the Palace. Follow the tutorials until the first 'mini-boss' of the game; It's worth mentioning that after the gun tutorial, there is one more combat, and after that, your team will be healed to full on both HP and SP so do not waste any healing items unless you find yourself in a bad situation;Chariot Rank 1; Examine the Storage, the big box near the stairs on the second floor of LeBlanc to get the DLC items; When you are ready, go to sleep;Fool Rank 1.",
					night: null,
				},
			},
			{
				date: 13,
				content: {
					day: "Quick Travel to the Classroom and speak with the Injured Volleyball Player;Quick Travel to the Classroom Bldg 1F;Speak with the students in front of Classroom 3C;Quick Travel to the Classroom Bldg 3F;Speak with the student in front of Classroom 1B",
					night: null,
				},
			},
			{
				date: 14,
				content: {
					day: "Go to Aoyama-Itchome Station and ride the train;Exit the building into Shibuya Station Square;Follow Ann into the Shibuya Underground Walkway and speak with her",
					night: null,
				},
			},
			{
				date: 15,
				content: {
					day: "Go south and then east to enter Practice Building;Go down the stairs and you will see the mission marker on the map. Go to the mission mark to start a cutscene;After the scene, go to the second floor and follow Ryuji into the PE Faculty Office;Third Castle Infiltration;Capture every Persona you encounter because they are necessary for Confidant Bonuses and Strength Ranks. Failing to do so could prevent you from being able to keep up with the schedule.You have to grind some money before proceeding with the story. In a few days, we will spend all of it. The goal is 15000 yen.;In a few days, we will need 2 Tin Claps and 2 Silk Yarn. If you drop them from enemies, great. If not, we will have to buy it. Tin Claps cost 2050 each and Silk Yarn costs 1150 each. Add the ones you need to your farming total, so if you need to buy 2 Tin Claps, you will need 19100 total.DO NOT go past the room with three Shadows and one Treasure Chest, otherwise, you will be locked into a story event and you won’t be able to grind anymore. Kill the three Shadows, go back to the entrance, save the game, and repeat;When you have the necessary money, continue forward to start the story events.Lovers Rank 1;Speak with the Punk-rock Woman in Leblanc;Magician Rank 1.",
					night: null,
				},
			},
			{
				date: 16,
				content: {
					day: "Today, one of your teachers will throw chalk at you. It is based on RNG and your Proficiency Rank if you dodge it or get hit on the head. It doesn't matter for now if you dodge it or not;Go to the Clinic in Yongen-Jaya Backstreets but don't buy anything. All the money calculations for the early game assume that you are not buying anything, be it consumables or equipment. If you want to buy something, you need to farm more money.",
					night: null,
				},
			},
			{
				date: 17,
				content: {
					day: "Follow Ryuji into Shibuya Central Street;Enter Untouchable Airsoft Shop and speak to the Surly Manager but do not buy anything.",
					night: "Clean your desk and make one Lock Pick during the tutorial. Proficiency +2.",
				},
			},
			{
				date: 18,
				content: {
					day: "Go to the school's third floor and enter the library. Borrow the book 'The Great Thief';Buy SP recovery items, Arginade and Water of Rebirth, from the vending machines at the School Courtyard, Shibuya Arcade (on Central Street), and the Bathhouse in front of LeBlanc. From now on, it's recommended to buy them every week. They are a big help in the early game;Go to Shibuya Underground Mall and buy 1 Bio Nutrient from the Flower Shop (The Underground Mall can be accessed from both the Central Street and Underground Walkway);Go to the Second-hand Shop in Yongen-Jaya Backstreets and buy Silk Yarn and Tin Clasp to have 2 of each. Check your inventory: if you already have it, there is no reason to buy more;Go to the Clinic and hang out with Takemi. You don't need a matching Persona for this Rank.;Death Rank 1 Guts +1",
					night: "The same way that teachers ask different questions at school, on specific nights, there will be crossword puzzles to solve in the booth seat closer to the stairs inside LeBlanc. Today’s answer is “Semesters”. Knowledge +1;Go upstairs and clean the junk-littered floor to get the books Social Thought and Yoncha Walker 04, as well as a CRT TV.",
				},
			},
			{
				date: 19,
				content: {
					day: "Question: (They’re the same), Knowledge +1;Go to the school library and interact with one of the Study Booths. Choose to study. Knowledge +1, Guts +1.",
					night: "Use the Bio Nutrient on the plant in your room. Kindness +2;Go back downstairs and talk to all the customers so they leave the cafe. After that, examine the books near the yellow phone;Read the book 'The Great Thief'.",
				},
			},
			{
				date: 20,
				content: {
					day: "Some days, the protagonist will be able to secure a place to sit while riding the train. During these days you can read any book without consuming a time slot;Read the book The Great Thief in the metro (1/46). Knowledge +3;Borrow the book 'Pirate Legend' from the school library;Study in the school library again, this time there is a rainy day bonus for extra points in Knowledge but no point in Guts. Knowledge +3.",
					night: "Interact with the booth in front of the yellow phone inside LeBlanc and study one more time for another rainy day bonus. Knowledge +3 (Studying at LeBlanc does not give you points in Guts.)",
				},
			},
			{
				date: 21,
				content: {
					day: "Go to the Second-hand Shop in Yongen-Jaya Backstreets and buy the DVD Player;Go to Shibuya Central Street and pay for the annual subscription of the DVD Rental Shop;Rent the DVD The X-Folders;Go all the way back to the school and study in the library. We get yet another rainy day bonus. Knowledge +3.",
					night: "Use the DVD in your room to watch The X Folders. Guts +2.",
				},
			},
			{
				date: 22,
				content: {
					day: "You can get a 'Yakisoba Pan' on the School Shop's first floor. It only restores 50 HP for one ally but it is dirt-cheap. You can get one every Friday;Study in the school library. Knowledge +1, Guts +1.",
					night: 'Use the DVD in your room to watch The X Folders (1/12). Guts +2 and Guts Rank 2.',
				},
			},
			{
				date: 23,
				content: {
					day: 'Question: (All of them). Knowledge +1;Go to Shibuya Central Street and rent the DVD "Wraith";Hang out with Takemi. No Death Persona needed for this one either;Death Rank 2, Guts +1.',
					night: 'SAVE YOUR GAME and interact with the table to craft lock picks, Morgana has a chance of saying “an efficient use of materials...” during the crafting cutscene, giving you 1 extra item and one extra Proficiency point while using fewer materials;Reload until you can make 3, 2 from your craft plus 1 extra from Morgana. (You should have 4 in total with the 1 from the tutorial) Proficiency +3.',
				},
			},
			{
				date: 24,
				content: {
					day: 'You will be forced into a meeting with your team, just exit;Go to Shibuya Underground Walkway and buy the fruit drink from the stand. Charm +1;Fast travel to Aoyama-Itchome, then choose "Hideout" to meet up and infiltrate the Palace;Fourth Castle Infiltration, for real this time;During the Persona fusion tutorial, fuse Arsene and Pixie to get Agathion (Chariot, 3). Pass on Eiha and Zio;Fool Rank 2;This is a very difficult Palace because it’s so early in the game that we don’t have access to Personas, skills, or items to help us out, but we still need to finish it in one day otherwise we won’t be able to get everything in one playthrough. Keep multiple saves just to be safe and use the SP items bought from the vending machines;Red Seed: it’s part of the tutorial, your teammates will tell you to go get it;Once you reach the roof, the enemies will become quite strong. It’s recommended to skip all the battles until you are inside the castle again. When the Treasure is found, you can farm as much as you like, but for now, focus on reaching the end of the Palace;Green Seed: When you are using the grappling hook to climb the outside of the tower, the Seed will be at the very top. Enter the first window and crawl inside a vent to reach a higher area where you can use the grappling hook to get higher;Blue Seed: Back inside the castle, when the rooms start to shift, take the elevator down. You will see another elevator in the new area that can’t be used. Continue through Kamoshida’s painting to unlock a shortcut to the very beginning of the Palace. Explore this area to find a lever that activates the other elevator. Go back through the painting and use the new elevator that we just activated to go down to a new area and fight the first Will Seed Guardian;Reach the treasure (That is, entering the treasure room and viewing the cutscene.) and farm until you are level 9 with 20000 yen;Fuse Silky and Agathion to get Berith (Hierophant, 9);Leave the Palace after securing the route to the Treasure, fusing Berith, and getting the necessary money;Almost every Sunday, you can check the TV and buy unique or rare items from the Shopping Program. Some of them are useful, others aren’t. This schedule was designed to have the money to buy from the Shopping Program every time (You can only pick one). It’s recommended to buy the "Share of Spring Set." SP is too valuable in the early game; Talk with Sojiro;Hierophant Rank 1.',
					night: null,
				},
			},
			{
				date: 25,
				content: {
					day: 'Read the book Pirate Legend in the metro;Question: (You unquestionably support it), (You have a duty to correct it). Charm +1 and Lovers +2;Buy the SP Recovery items from the vending machines;Quick travel to Untouchable Airsoft Shop and sell your loot (for reference, having 30000 after selling is more than enough);It’s recommended to buy consumable items from Takemi’s Clinic in the Backstreets. 2 Takemedic-All and 2 Revivadrin is enough;Go to the hideout and select the option to Send the Calling Card.',
					night: 'Read the book Pirate Legend (2/46). Guts +3.',
				},
			},
			{
				date: 26,
				content: {
					day: 'Steal Kamoshida’s Heart;Magician Rank 2;Use the TV in your room to watch the DVD Wraith. Kindness +2.',
					night: null,
				},
			},
			{
				date: 27,
				content: {
					day: 'Question: (Four Color Theorem) Knowledge +1 and Knowledge Rank 2;Make sure you have a Death, a Hierophant, a Lovers, and a Chariot Personas with you (If you don’t, go to Shibuya Central Street and get them from the Velvet Room);Hang out with Takemi;Death Rank 3, Guts +1.',
					night: 'Solve the crossword puzzle downstairs: the answer is “Blossom”. Knowledge +1;Use the DVD in your room to watch Wraith (2/12). Kindness +2.',
				},
			},
			{
				date: 28,
				content: {
					day: 'Go to Shibuya Central Street and rent the DVD "Guy McVer";Borrow the book "Zorro the Outlaw" from the school library;Study in the school library. Knowledge +1 and Guts +1.',
					night: 'Read the book Zorro the Outlaw.',
				},
			},
			{
				date: 29,
				content: {
					day: 'Go to Shibuya Central Street Movie Theater and watch the movie Tanktop Millionaire (1/18). Guts +3.',
					night: 'Read the book Zorro the Outlaw (3/46). Kindness +3 and Kindness Rank 2.',
				},
			},
			{
				date: 30,
				content: {
					day: 'Read the book "Social Thought" in the metro;Question: (Wonder), (Child), (A prodigy). Knowledge +1;Borrow the book "The Alluring Dancer" from the school library;Hang out with Takemi;Death Rank 4, Guts +1.',
					night: 'Read the book Social Thought (4/46) Knowledge +3.',
				},
			},
			

		],
	},

	{
		id: 2,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	// --------------------
	{
		id: 3,
		month: "june",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	{
		id: 4,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	{
		id: 5,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	{
		id: 6,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	{
		id: 7,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	{
		id: 8,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	{
		id: 9,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

	{
		id: 10,
		month: "may",
		days: [
			{
				date: 1,
				content: {
					day: "Buy the drink from the stand in Shibuya Underground Walkway Proficiency +1;Buy 1 Bio Nutrient from the Shibuya Underground Mall Flower Shop;Hang out with Ryuji;Chariot Rank 2;",
					night: "Examine the TV for the Home Shopping Program:;Use the DVD in your room to watch Guy McVer Proficiency +2 and Proficiency Rank 2",
				},
			},
			{
				date: 2,
				content: {
					day: "Solve the crossword puzzle downstairs: answer “Golden” Knowledge +1;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 3,
				content: {
					day: "Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 4,
				content: {
					day: "Go to the Untouchable Airsoft Shop;Choose to look inside the bag Iwai gives you;Study at LeBlanc Knowledge +2",
					night: null,
				},
			},
			{
				date: 5,
				content: {
					day: "Use Bio Nutrient on the plant in your room Kindness +2;Study at LeBlanc Knowledge +2.Fool rank 3",
					night: null,
				},
			},
		],
	},

];

module.exports = months;
