import { makeStyles, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import React from 'react';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Card from '../common/card/card';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
    heading: {
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem'
        }
    },
    timelineItem: {
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column !important',
        }
    },
    timeline: {
        [theme.breakpoints.down("xs")]: {
            width: '100% !important',
            padding: '0 !important',  
        }
    },
    timelineContent: {
        [theme.breakpoints.down("xs")]: {
            padding: 0,
            // display: 'none'
            textAlign: 'left !important'
        }
    },
    timelineOppositeContent: {
        padding: '0px',
        [theme.breakpoints.down("xs")]: {
           textAlign: 'start',
           order: 2,
           width: '100%'
        }
    },
    seperator: {
        [theme.breakpoints.down("xs")]: {
            width: 'fit-content'
        }
    },
    connector: {
        [theme.breakpoints.down("xs")]: {
            height: '20px'
        }
    }
}));

const educationData = [
    { title: 'Keysight Technologies', description: 'Working in Keysight have been an amazing journey so far, from products like Pathwave Cloud to Switch Manager, From Core Front End Engineer to participating in Hackathons have been a luxury. From implementing complex data structures and syncing data with Heavy Hardwares may seem easy but its sweat and patience. ' },
    { title: 'Indrik Technologies', description: "This Being a well funded startup, directed by IIM & IIT aluminis was a hell of a ride, from developing things from scratch to fixing bugs over midnight. With more than active daily 10k user once to 100k+ android downloads. REFERYAAR a social referral and earning platform changed my view regarding how the slightest of UX/UI can make a difference" },
    { title: 'Indraprastha University', description: "Studies have bored me, but Engineering have made me of what I am today. I don't brag about Grades because I had the worst of them haha! But Experience I gained was way over mere marks. With developing Home Automation App to Learning Data Structures and Algorithms, Programming have been my favorite subject above all" },
    { title: 'Delhi Public School', subTitle: 'Secondary School', showTag: 'May 2012', description: "Delhi Public School isn't just  any other school, its a school of culture and aspirations. From being optimistic to being ambitious that's what this school taught me. Science Stream is amazing, it helps you open your mind and think out of the box"}];

const Education = () => {
    const classes = useStyles();
    return (
        <div>
            <Timeline className={classes.timeline} align="alternate">
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent} >
                        <Card link="/portfolio" subTitle="R&D Engineer" showButton={true} buttonLabel="Work Samples" showTag="Feb 2018 - Current" data={educationData[0]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator}>
                        <TimelineDot color="secondary">
                            <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent}>
                            <Typography variant="h5" className={classes.heading} >
                                Current Employment
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                        <Card link="/portfolio" subTitle="Software Engineer" showButton={true} buttonLabel="Work Samples" showTag="Oct 2017 - Feb 2018" data={educationData[1]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator}>
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent}>
                            <Typography variant="h5" className={classes.heading} >
                                Former Employment
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                        <Card path="../doc/degree.pdf" subTitle="Bachelors in Technology" showButton={true} buttonLabel="Degree" showTag="Aug 2013 - May 2017" data={educationData[2]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator}>
                        <TimelineDot color="secondary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent}>
                            <Typography className={classes.heading} variant="h5" >
                                Graduation
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                        <Card subTitle="Matriculation" showTag="2011 - 2012" data={educationData[3]} />
                    </TimelineOppositeContent>
                    <TimelineSeparator className={classes.seperator}>
                        <TimelineDot color="primary">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent}>
                            <Typography variant="h5" className={classes.heading} >
                                Secondary Education
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Education;