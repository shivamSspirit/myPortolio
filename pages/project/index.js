import React from "react";

import ProjectList from "../../Components/project/projectList";

const Dummy_projects = [
	{
		id: "0",
		projectTitle: "Ecommerce app for toys",
		projectDate: "april, 2022",
		desCription:
			"PretToys is an e-commerce web app built with Html Css js React.js. Here you can buy, variety of toys of different categories and types.",
		buttonLink1: "https://pret-toys-shivamsoni00.vercel.app",
		buttonLink2: "https://github.com/shivamsoni00/pretToys",
	},
	{
		id: "1",
		projectTitle: "Video library app for games",
		projectDate: "may, 2022",
		desCription:
			"Riot is a video library for leagues of legend game reviews and their theme(songs and fights) videos. Watch quality game videos for your interest at one place.",
		buttonLink1: "https://riot-library-kxcg9r2o7-shivamsoni00.vercel.app/",
		buttonLink2: "https://github.com/shivamsoni00/RiotLibrary",
	},
	{
		id: "2",
		projectTitle: "Quiz application",
		projectDate: "may, 2022",
		desCription:
			"QuizApp is a single-page-web-app. It consist of multiple categories from trivia category api, it consists landing page,category page,question pages rules pages and result page",
		buttonLink1: "https://quiz-app-zeta-gray.vercel.app/",
		buttonLink2: "https://github.com/shivamsoni00/quizApp",
	},
	{
		id: "3",
		projectTitle: "Css component library",
		projectDate: "march, 2022",
		desCription:
			"ninjaUi is a CSS component library for faster and simpler development. It follows class based approach for styling components.",
		buttonLink1: "https://ninja-m9yg5tu9o-shivamsoni00.vercel.app",
		buttonLink2: "https://github.com/shivamsoni00/ninjaUi",
	},
	{
		id: "4",
		projectTitle: "Joy networks",
		projectDate: "september, 2022",
		desCription:
			"this is social media network for kids to use like and post each other content",
		buttonLink1: "#joynetwork",
		buttonLink2: "https://github.com/shivamsoni00/joynetwork",
	},
	{
		id: "5",
		projectTitle: "contact app",
		projectDate: "december, 2021",
		desCription:
			"this is contact application built with mern stack",
		buttonLink1: "https://dry-shelf-17303.herokuapp.com",
		buttonLink2: "https://github.com/shivamsoni00/phonebooky",
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
