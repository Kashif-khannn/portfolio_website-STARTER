import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// const projectsDemos = [
//   {
//     title: "COVID-19 Tracker",
//     description:
//       "COVID-19 Tracker implemented using Spring Boot and ThymeLeaf to display the total case count daily around the globe",
//   },
//   {
//     title: "Amazing Store",
//     description:
//       "Amazing Store implemented using Spring Boot and Angular to implement an online store with an inventory for products to buy and sell",
//   },
//   {
//     title: "Personal Portfolio Website",
//     description:
//       "Personal Portfolio Website implemented using React to showcase my skills and professional experience",
//   },
//   {
//     title: "TicTacToe",
//     description: "Implemented TicTacToe game using React",
//   },
// ];

const Projects = (props) => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <div>
          {project.title}
          <br></br>
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
