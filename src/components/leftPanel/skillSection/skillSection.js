import { Box, LinearProgress, Typography } from "@material-ui/core";
import React from "react";

const skillData = [
  { name: "React.js", value: 90 },
  { name: "Node.js", value: 80 },
  { name: "Angular", value: 90 },
  { name: "Typescript", value: 90 },
  { name: "Javascript", value: 90 },
  { name: "Java", value: 90 },
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "Docker", value: 70 },
  { name: "Kubernetes", value: 60 },
];
const SkillSection = () => {
  return skillData.map((item, index) => {
    return (
      <Box key={index} display="grid" gridGap="12px" width="100%">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography style={{ paddingLeft: 8, paddingTop: 8 }} component="p">
            {item.name}
          </Typography>
          <Typography component="p">{item.value} %</Typography>
        </Box>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={item.value}
        />
      </Box>
    );
  });
};

export default SkillSection;
