import { Box,Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const BannerSection = (props) => {


    const useStyles = makeStyles((theme) => ({
        root: {
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center'
            paddingTop: '32px'
        },
        image: {
            height: '350px',
            position: 'absolute',
            right: 0,
            top: -50,
            [theme.breakpoints.down("sm")]: {
                height: '300px',
                top: 0,
            }
        },
        heading: {
            color: 'white',
            [theme.breakpoints.down("xs")]: {
                fontSize: '2.5rem'
            }
        },
        bannerImage: {
            backgroundImage: `url(${props.bannerConfig.image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            position: 'relative'
        }
    }));


    const classes = useStyles();
    return (
        <Box bgcolor="primary.A700">
            <Box display="flex" alignItems="center" className={classes.bannerImage}>
                <Grid container>
                    <Grid item xs={6} sm={6} md={4}>
                        <Box padding="32px">
                            <Typography variant="h3" className={classes.heading}>
                                {props.bannerConfig.title}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <img alt="me" className={classes.image} src={props.bannerConfig.image2} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default BannerSection;