import React from "react";

import ProjectList from "../../Components/project/projectList";

const Dummy_projects = [
  {
    id: "0",
    projectTitle: "profit-or-loss",
    projectDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
    buttonLink2: "",
  },
  {
    id: "1",
    projectTitle: "profit-or-loss",
    projectDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
    buttonLink2: "",
  },
  {
    id: "2",
    projectTitle: "profit-or-loss",
    projectDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
    buttonLink2: "",
  },
  {
    id: "3",
    projectTitle: "profit-or-loss",
    projectDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
    buttonLink2: "",
  },
  {
    id: "4",
    projectTitle: "profit-or-loss",
    projectDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
    buttonLink2: "",
  },
  {
    id: "5",
    projectTitle: "profit-or-loss",
    projectDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
    buttonLink2: "",
  },
  {
    id: "6",
    projectTitle: "profit-or-loss",
    projectDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
    buttonLink2: "",
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
