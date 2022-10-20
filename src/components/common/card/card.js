import { Box, Button, Chip, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    box: {
        padding: 24
    },
    link: {
        textDecoration: 'none'
    }
})


const Card = (props) => {
    const classes = useStyles();
    return (
               <Box bgcolor="primary.A600" className={classes.box} display="grid" gridGap="16px">
               <Box display="flex" justifyContent="space-between">
                   <Typography variant="h6">
                       {props.data.title}
                   </Typography>
                   {props.showTag ? <Chip color="primary" label={props.showTag} /> : null}
               </Box>
               <Box display="grid" gridGap="4px" justifyContent="flex-start" textAlign="start">
                   {props.subTitle ? <Typography variant="body2">
                       {props.subTitle}
                   </Typography> : null}
                   <Typography variant="body2">
                       {props.data.description}
                   </Typography>
               </Box>
               {props.showButton ? <Grid container>
                   <Grid item xs={6}>
                       {props.link ? 
                       <Link className={classes.link} to={props.link}>
                       <Button fullWidth variant="outlined" color="secondary">
                           {props.buttonLabel}
                           <ArrowForward />
                       </Button>
                       </Link> : <a href={props.path} className={classes.link}  target="_blank">
                       <Button fullWidth variant="outlined" color="secondary">
                           {props.buttonLabel}
                           <ArrowForward />
                       </Button>
                        </a>}
                   </Grid>
               </Grid> : null}
           </Box>
    )
}

export default Card;