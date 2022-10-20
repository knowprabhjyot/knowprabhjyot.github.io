import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Card from '../common/card/card';

const useStyles = makeStyles((theme) => ({
   container: {
    [theme.breakpoints.down("xs")]: {
        justifyContent: 'center'
    }
   }
}));

const skillSetData = [{title: 'Current Employer', description: 'Keysight Technologies'}, {title: 'Designation', description: 'R&D Engineer'}, {title: 'Email', description: 'knowprabhjyot@gmail.com'}]

const QuickInfo = () => {
    const classes = useStyles();

    const showInfo = () => {
        return skillSetData.map((item, index) => {
            return (
                <Grid className={classes.container} key={index} item md={4} sm={4} xs={12}>
                    <Card data={item}/>
                </Grid>
            )
        })
    }

    return (
        <Grid container spacing={3}>
            {showInfo()}
        </Grid>
    )
}


export default QuickInfo;