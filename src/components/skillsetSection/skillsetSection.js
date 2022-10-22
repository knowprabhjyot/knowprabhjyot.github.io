import { Grid } from "@material-ui/core";
import React from "react";
import Card from "../common/card/card";

const SkillSetSecton = () => {
  return (
    <Grid container spacing={3}>
      {showSkill()}
    </Grid>
  );
};

const skillSetData = [
  {
    title: "Front End Development",
    description:
      "Front End is the backbone of a website, if a user isn't impressed with the design, he may just bounce back.",
    tags: ["React.js", "Angular", "Javascript", "Typescript"],
  },
  {
    title: "Back End Development",
    description:
      "The other piller of a great website, if the website is slow or doesn't show logic promise the user may never come back.",
    tags: ["Node.js", "Next.js", "MongoDB", "SQL"],
  },
  {
    title: "Devops",
    description:
      "Continuous deployment, is required big time in today's time it saves huge hassle and makes developers life easier.",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "UI/UX Design",
    description:
      "If the flow of the website ain't good, User would be confused and would fail in proper engagement",
    tags: ["Photoshop", "Illustrator", "Figma"],
  },
  {
    title: "Product Management",
    description:
      "The succesful delivery of the product is achieved by completing milestones with the given deadlines",
      tags: ["Agile", "Trello", "Jira", "Confluence"],

  },
  {
    title: "Problem Solving",
    description:
      "Regardless of any technologies its important to have the most important skills called Problem Solving",
    tags: ["Trees", "Graphs", "Dynamic",],
  },
];
const showSkill = () => {
  return skillSetData.map((item, index) => {
    return (
      <Grid key={index} item xs={12} md={4} sm={6}>
        <Card data={item} />
      </Grid>
    );
  });
};
export default SkillSetSecton;
