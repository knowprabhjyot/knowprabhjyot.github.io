import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import React from 'react';


const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down("xs")]: {
        justifyContent: 'center'
    }
    }
}));  

const Footer = () => {
    const classes = useStyles();
    return (
        <Box padding="12px" bgcolor="primary.A600">
            <Grid container display="flex" justify="space-between" className={classes.container}>
                <Grid item>
                    <Typography variant="body2">
                        <Box display="flex" alignItems="center">
                            Made with  <FavoriteIcon style={{padding: '0px 4px'}} color="secondary"/>  by Prabhjyot
                        </Box>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        Email : knowprabhjyot@gmail.com
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;