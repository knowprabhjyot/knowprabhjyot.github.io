import { Box, Typography, Chip } from '@material-ui/core';
import React from 'react';
import BannerSection from '../bannerSection/bannerSection';
import Education from './education';


const bannerConfig = {
    title: 'Technology Enthusiast',
    image: '../images/banner2.jpg',
    image2: '../images/me2.png'
}

const hobbiesData = ['Reading', 'Researching', 'Travel', 'Binge Watch'];
const showHobbies = () => {
    return hobbiesData.map((item) => {
        return (
            <Chip style={{marginRight: '8px', marginTop: '8px'}} label={item} variant="outlined" color="secondary" />
        )
    })
}
const About = () => {
    return (
        <div>
            <Box marginBottom="32px">
                <BannerSection bannerConfig={bannerConfig} />
            </Box>
            <Typography variant="h5">
                About Me
            </Typography>
            <Box display="grid" gridGap="32px">
                <Typography variant="body2">
                    My Kind of Story
            </Typography>

                <Box display="flex" alignItems="center">
                    <Typography variant="subtitle2">
                        My Hobbies
            </Typography>
                    <Box paddingLeft="32px">
                        {showHobbies()}
                    </Box>
                </Box>
                <Typography variant="subtitle2">
                    Hello my name is Prabhjyot Gambhir and I am a Software Engineer. I love developing full fledged web and mobile applications.
                    One thing I have improved over time in me, is not giving up. If I want to achieve a milestone, and I don't know how to do it, I will be honest to myself and dedicate more time to explore and learn. But that's what we do in real life right ?
                    I may be blunt or straight forward, but I am loyal, if I chose you then I will be there for you 24 hours, because that's what I do.
                    Challenges excite me, staying idle frights me!
            </Typography>
                <Typography variant="h5">
                    My Journey
            </Typography>
                <Education />
            </Box>
        </div>
    )
}

export default About;