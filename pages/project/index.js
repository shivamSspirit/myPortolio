import React from "react";

import ProjectList from "../../Components/project/projectList";

const Dummy_projects = [
	{
		id: "0",
		projectTitle: "cli-app-1",
		projectDate: "august, 2021",
		desCription:
			"a cli application built with node js who take user query and give the answer based on that query",
		buttonLink1: "https://replit.com/@shivamspirit/cliQuizFirst#index.js",
		buttonLink2: "https://github.com/shivamsoni00/cli-apps",
	},
	{
		id: "1",
		projectTitle: "cli-app-2",
		projectDate: "august, 2020",
		desCription:
			"another cli app built with node js with features of user QnA query",
		buttonLink1: "https://replit.com/@shivamspirit/nextlevelcli#index.js",
		buttonLink2: "https://github.com/shivamsoni00/cli-apps",
	},
	{
		id: "2",
		projectTitle: "text-translator",
		projectDate: "september, 2020",
		desCription:
			"a text-translation app who take input from user and translate text in another language ",
		buttonLink1: "https://language-translator1.netlify.app",
		buttonLink2: "https://github.com/shivamsoni00/traslation0",
	},
	{
		id: "3",
		projectTitle: "another-text-translator",
		projectDate: "september, 2020",
		desCription:
			"a text-translation app who take input from user and translate text in another language",
		buttonLink1: "https://language-translator0.netlify.app",
		buttonLink2: "https://github.com/shivamsoni00/translation1",
	},
	{
		id: "4",
		projectTitle: "Tiny Trianlges",
		projectDate: "september, 2020",
		desCription:
			"A website which help and fun with user about basic triangle math and formulas.",
		buttonLink1: "https://tinytriangles.netlify.app/",
		buttonLink2: "https://github.com/shivamsoni00/About-Triangle",
	},
	{
		id: "5",
		projectTitle: "profit-or-loss",
		projectDate: "september, 2020",
		desCription:
			"A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
		buttonLink1: "https://stockk-calc.netlify.app",
		buttonLink2: "https://github.com/shivamsoni00/StockCalculator",
	},
	{
		id: "6",
		projectTitle: "Emoji Interpreter",
		projectDate: "september, 2020",
		desCription:
			"A website which interpret meaning of some emoji based on their selection and on click",
		buttonLink1: "https://interpretemoji.netlify.app",
		buttonLink2: "https://github.com/shivamsoni00/Emoji",
	},
	{
		id: "7",
		projectTitle: "plainDrome Birthday",
		projectDate: "september, 2020",
		desCription:
			"A website which take date as input from user and tell them that date are palindrome or not in nature",
		buttonLink1: "https://bdy-plaindrome.netlify.app/",
		buttonLink2: "https://github.com/shivamsoni00/DatePlaindrome",
	},
	{
		id: "8",
		projectTitle: "If birthdayIs Luckey",
		projectDate: "september, 2020",
		desCription:
			"A website which take date as input from user and tell them that their luckey number are match with that date or not",
		buttonLink1: "https://bdyisluckey.netlify.app",
		buttonLink2: "https://github.com/shivamsoni00/LuckeyNumber",
	},
	{
		id: "9",
		projectTitle: "book recommendation",
		projectDate: "september, 2020",
		desCription:
			"A website which recommend user to books with their choices",
		buttonLink1: "https://boooks-recommendation.netlify.app",
		buttonLink2: "https://github.com/shivamsoni00/bookRecommend",
	},
	{
		id: "10",
		projectTitle: "bill-calculator",
		projectDate: "september, 2020",
		desCription: "A website which take care about bill splitting",
		buttonLink1: "https://bill-calc.netlify.app",
		buttonLink2: "https://github.com/shivamsoni00/cashcalc",
	},
];

function index(props) {
	return (
		<>
			<div>
				<h1 style={{ textAlign: "center" }}>
					See my <span style={{ color: "blueviolet" }}>Code</span>
				</h1>
			</div>
			{props.projects.map((project) => (
				<div key={project.id}>
					<ProjectList
						projectTitle={project.projectTitle}
						projectDate={project.projectDate}
						desCription={project.desCription}
						buttonLink1={project.buttonLink1}
						buttonLink2={project.buttonLink2}
					/>
				</div>
			))}
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			projects: Dummy_projects,
		},
	};
}

export default index;
