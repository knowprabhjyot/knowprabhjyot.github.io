import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import { CSSTransition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  itemName: {
    marginRight: "8px",
    [theme.breakpoints.down("md")]: {
      // fontSize: '1.5rem',
      justifyContent: "center",
    },
  },
  itemContainer: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

const ExperienceSection = () => {
  const classes = useStyles();
  const experenceData = [
    { name: "Industry Experience", value: 4 },
    { name: "Completed Projects", value: 10 },
    { name: "Companies Worked", value: 3 },
    { name: "Years of Teaching", value: 1 },
  ];

  const showExperience = () => {
    return experenceData.map((item, index) => {
      return (
        <CSSTransition in={true} timeout={300} unmountOnExit>
          <Grid item lg={3} md={6} xs={6} key={index}>
            <Box
              className={classes.itemContainer}
              display="flex"
              alignItems="center"
            >
              <Typography
                className={classes.itemName}
                color="secondary"
                variant="h6"
              >
                <CountUp
                  end={item.value}
                  delay={1}
                  duration={2}
                  suffix="+"
                ></CountUp>
              </Typography>
              <Typography className={classes.itemName} variant="subtitle2">
                {item.name}
              </Typography>
            </Box>
          </Grid>
        </CSSTransition>
      );
    });
  };

  return <Grid container>{showExperience()}</Grid>;
};

export default ExperienceSection;
