import { Grid } from '@material-ui/core';
import React from 'react';
import Card from '../common/card/card';

const SkillSetSecton = () => {
    return (
        <Grid container spacing={3}>{showSkill()}</Grid>
    )
}

const skillSetData = [
{title: 'Front End Development', description: "Front End is the backbone of a website, if a user isn't impressed with the design, he may just bounce back."},
{title: 'Back End Development', description: "The other piller of a great website, if the website is slow or doesn't show logic promise the user may never come back."},
{title: 'Graphics Design', description: "A company is not remembered from the name, it's remembered from the branding, logo and graphics which user remembers."},
{title: 'UI/UX Design', description: "If the flow of the website ain't good, User would be confused and would fail in proper engagement"},
{title: 'Devops', description: "Continuous deployment, is required big time in today's time it saves huge hassle and makes developers life easier."},
{title: 'SEO', description: "A business with no customers, ain't a business at all, So social media presence is required to make the customers engaging."}];
const showSkill = () => {
    return skillSetData.map((item, index) => {
        return (
                <Grid key={index} item xs={12} md={4} sm={6} >
                    <Card data={item} />
                </Grid>
            )
    })
}
export default SkillSetSecton;