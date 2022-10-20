import { Box, Typography } from '@material-ui/core';
import React from 'react';
import BannerSection from '../bannerSection/bannerSection';
import ExperienceSection from '../experienceSection/experienceSection';
import SkillSetSecton from '../skillsetSection/skillsetSection';


const bannerConfig = {
    title: 'You Know I got this!',
    image: '../images/banner.jpg',
    image2: '../images/me4.png'
}

const Home = () => {
    return (
        <Box display="grid" gridGap="32px">
            <BannerSection bannerConfig={bannerConfig} />
            <ExperienceSection />
            <Typography variant="h5">
                My Skill Set
                </Typography>
            <SkillSetSecton />
        </Box>
    )
}

export default Home;