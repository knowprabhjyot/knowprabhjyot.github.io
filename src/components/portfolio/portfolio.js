import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  card: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  image: {
    width: "100%",
    display: "block",
    height: "100%",
    borderRadius:"20px"
  },
  alertEnter: {
    transition: "all 300ms linear",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  let [cardView, setCardView] = useState(-1);

  const showPort = () => {
    return portfolioData.map((item, index) => {
      return (
    
          <Box
          height="300px"
          margin="40px"
          padding="12px"

            className={classes.container}
            onMouseEnter={() => setCardView(index)}
            onMouseLeave={() => setCardView(-1)}
          >
            <img
              
              alt="Prabhjyot Gambhir"
              key={index}
              src={item.image}
              className={classes.image}
            />
            <Typography component="h5" style={{ paddingTop: 12}}>
                {item.description}
            </Typography>
            {/* <div className={classes.card}>
              {cardView === index ? <Card data={item} /> : null}
            </div> */}
          </Box>
      );
    });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5">Portfolio</Typography>
      <Box display="grid" gridGap="32px">
        <Typography variant="body2">
          A developer's experience says its all
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="10px">{showPort()}</Masonry>
        </ResponsiveMasonry>
      </Box>
    </Container>
  );
};

const portfolioData = [
  {
    title: "Medico",
    description:
      "Medico is full fledged IOS application built over React Native ",
    image: "../images/web6.jpg",
  },
  {
    title: "Switch Manager",
    description:
      "Switch Manager is a product designed using Go.js, Angular and Node.js. Its a software for representing GUI of Switches and matrix",
    image: "../images/web9.png",
  },
  {
    title: "Know Prabhjyot",
    description:
      "The Web Resume which you are viewing, obviously it is my product too. Made with love in React and Node js and Fully Responsive Website.",
    image: "../images/web7.jpg",
  },
  {
    title: "Referyaar",
    description:
      "Referyaar is one of my favorite products, I worked on Designed on Angular and Node, this beauty is a social media referral app with almost all features like Wallet to Friends list.",
    image: "../images/web8.jpg",
  },
  {
    title: "Intelli-H",
    description:
      "Intelli-H is a home automation app to turn on lights and fans with additional features like smoke detection, Temperature. With Flat Design and implementation with hardware is a perfect Comp-Elec application",
    image: "../images/app2.jpg",
  },
];

export default Portfolio;
