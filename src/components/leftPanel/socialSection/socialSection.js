import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from '@material-ui/core';

const SocialSection = () => {
    return (
        <Box display="flex" justifyContent="space-between">
        <a rel = "noopener noreferrer" href="https://www.facebook.com/prabhjotgambhir" target = "_blank">
            <FacebookIcon color="secondary" />
        </a>
        <a rel = "noopener noreferrer" href="https://www.linkedin.com/in/prabhjyot-g-3832b5116/" target = "_blank">
            <LinkedInIcon color="secondary" />
        </a>
        <a rel = "noopener noreferrer" href="https://www.instagram.com/prabhjyot_gambhir/" target = "_blank">
            <InstagramIcon color="secondary" />
        </a>
        <a rel = "noopener noreferrer" href="https://twitter.com/PrabhjyotGambh1" target = "_blank">
            <TwitterIcon  color="secondary"/>
        </a>
        <a rel = "noopener noreferrer" href="https://github.com/knowprabhjyot" target = "_blank">
            <GitHubIcon  color="secondary" />
        </a>
        </Box>
    )
}

export default SocialSection;