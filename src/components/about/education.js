import { makeStyles, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Card from "../common/card/card";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  timelineItem: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column !important",
    },
  },
  timeline: {
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      padding: "0 !important",
    },
  },
  timelineContent: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      // display: 'none'
      textAlign: "left !important",
    },
  },
  timelineOppositeContent: {
    padding: "0px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "start",
      order: 2,
      width: "100%",
    },
  },
  seperator: {
    [theme.breakpoints.down("xs")]: {
      width: "fit-content",
    },
  },
  connector: {
    [theme.breakpoints.down("xs")]: {
      height: "20px",
    },
  },
}));

const educationData = [
  {
    title: "VCC",
    list: [
      "Currently teaching courses like Javascript, Typescript, React.js, Node.js, GraphQL, Data Structures and Algorithms to international Students",
      "Developed the course outline for Teaching HTML, CSS, Javascript, React.js and Node.js,PWA, React Native",
      "Intensely working with students to build their portfolio by making real world Web and Mobile Applications",
    ],
    description: "Teaching international students Software Development with Complex Subjects",
  },
  {
    title: "Langara College",
    list: [
      "Developed a product called as Medico, where patients can connect with doctors using React Native and GraphQL ",
      "Developed a product called as Farmingo, where farmers can connect with general Consumers using React, Node and Next.js. This web app is also a PWA",
    ],
    // link: [
    //   "https://github.com/pgambhirlangara/Farmingo",
    //   "https://github.com/pulkitnarula13/allwell"
    // ],
    description: "Pursuing Post Graduation Diploma in Web and Mobile Development",
  },
  {
    title: "IPD Analytics",
    list: [
      "Joined IPD Analytics as Software Engineer, was responsible for developing highly scalable web applications using robust technologies and problem solving skills.",
     "Developed and Delivered Rebates monitor product for drug and financial insights which is company’s latest newest analyst driven resource",
     "Advocated for and introduced better development practices by introducing Redux design, CD/CI pipeline for multiple products across the company.",
     "Gained full ownership and responsibility of products like Rebate Monitor, Clinical Pipeline for handling front end architecture. And introduced code reusability and scalability to the applications.",
     "Provided ongoing maintenance and new features to legacy codebase built with Javascript, React, Node.js, Mongodb and SQL.",
     "Additionally migrated from Node.js Server to AWS Lambda serverless architecture.",
     "Worked in transition from RESTful API architecture to Apollo Federation GraphQL."
    ],
    description: "Worked as Software Engineer in the company for around 6 months and worked on multiple projects like Rebate Monitor, Clinical Pipeline",
  },
  {
    title: "Keysight Technologies",
    list: [
      "Designed Front End architecture and implemented different plugin designs for Pathwave Cloud Platform namely – Test Library, Stations Management and Test operations plugins",
      "Ensured utmost quality design and fully Responsive in two different themes",
      "Designed, Developed and successfully delivered Switch Manager to clients like Nokia and Broadcom",
      "Core Developer of common UI Library called Alloy containing many reusable components consumed throughout Pathwave Project by different plugins. ",
      "Designed and Developed Entire Roles and Permissions architecture through front end of the application. ",
      "Implemented Complex Data structures and Algorithms For Searching and Filtering data across app using ES6 Standards. ",
      "Successfully implemented state management using Redux and Ngrx Store in React and Angular respectively. ",
      "Designed and Developed Rest API’s for performing CRUD operations across pathwave using Node & Nest JS.",
      "Gained Hand’s on experience in technologies like React, Angular, Node, Javascript, Docker, Kubernetes, Mongo DB, SQL.",
    ],
    description: "Worked as R&D Engineer I in Pathwave Cloud Team, and worked on multiple projects like - Pathwave Projects, Pathwave Stations, Switch Manager, Alloy",
  },
  {
    title: "Indrik Technologies",
    list: [
     "Conceptualized, designed, and developed entire web application from scratch",
     "Analyzed user interface and user experience delivering an amazing output.",
     "Worked on technologies like angular 4 & 5, Server Side rendering, Html, Css, Git and other front end technologies",
     "Designed the web with material guidelines to meet modern Ui experience and scalability of  product while maintaining good quality code standards."
    ],
    description:
      "This Being a well funded startup, directed by IIM & IIT aluminis was a hell of a ride, from developing things from scratch to fixing bugs over midnight. With more than active daily 10k user once to 100k+ android downloads. REFERYAAR a social referral and earning platform changed my view regarding how the slightest of UX/UI can make a difference",
  },
  {
    title: "Indraprastha University",
    description:
      "Engineering have made me of what I am today.I have been lucky having such a great experience so far, Additionally I gained was way over mere marks. With developing Home Automation App to Learning Data Structures and Algorithms, Programming have been my favorite subject above all",
  },
  {
    title: "Delhi Public School",
    subTitle: "Secondary School",
    showTag: "May 2012",
    description:
      "Delhi Public School isn't just  any other school, its a school of culture and aspirations. From being optimistic to being ambitious that's what this school taught me. Science Stream is amazing, it helps you open your mind and think out of the box",
  },
];

const Education = () => {
  const classes = useStyles();
  return (
    <div>
      <Timeline className={classes.timeline} align="alternate">
        {/* VCC  */}
      <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              subTitle="Computer Science Instructor (Part Time)"
              showButton={false}
              showTag="Sep 2022 - Present"
              data={educationData[0]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Current Employment
            </Typography>
          </TimelineContent>
        </TimelineItem>

                {/* Langara  */}

        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              subTitle="Student (Full Time)"
              showButton={false}
              showTag="May 2021 - Dec 2022"
              data={educationData[1]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Post Graduation
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* IPD Analytics  */}

        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              link="/portfolio"
              subTitle="Software Engineer (Full Time)"
              showButton={true}
              buttonLabel="Work Samples"
              showTag="Apr 2021 - October 2021"
              data={educationData[2]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Former Employment
            </Typography>
          </TimelineContent>
        </TimelineItem>


        {/* Keysight Technologies  */}

        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              link="/portfolio"
              subTitle="R&D Engineer II (Full Time)"
              showButton={true}
              buttonLabel="Work Samples"
              showTag="Feb 2018 - Apr 2021"
              data={educationData[3]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Former Employment
            </Typography>
          </TimelineContent>
        </TimelineItem>


        {/* Indrik Technologies  */}

        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              link="/portfolio"
              subTitle="Software Engineer (Full Time)"
              showButton={true}
              buttonLabel="Work Samples"
              showTag="Oct 2017 - Feb 2018"
              data={educationData[4]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Former Employment
            </Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              path="../doc/degree.pdf"
              subTitle="Bachelors in Technology"
              showButton={true}
              buttonLabel="Degree"
              showTag="Aug 2013 - May 2017"
              data={educationData[5]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography className={classes.heading} variant="h5">
              Graduation
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              subTitle="Matriculation"
              showTag="2011 - 2012"
              data={educationData[6]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Secondary Education
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
