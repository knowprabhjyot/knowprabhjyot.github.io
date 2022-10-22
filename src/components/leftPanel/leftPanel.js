import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box, Container, Divider, Grid } from '@material-ui/core';
import LanguageSection from './languageSection/languageSection';
import SkillSection from './skillSection/skillSection';
import SocialSection from './socialSection/socialSection';
import Badge from '@material-ui/core/Badge';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles({
    root: {
        paddingTop: '32px',
        textAlign: 'center'
    },
    media: {
        height: 120,
        width: 120,
    },
    details: {
        color: '#fff'
    },
});

const LeftPanel = () => {
    const classes = useStyles();
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })

    const StyledBadge = withStyles((theme) => ({
        badge: {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }))(Badge);

    return (
        <Box className={classes.root} bgcolor="primary.A600">
            <Container>
                <Box>
                <animated.div style={props}>

                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar className={classes.media} alt="Prabhjyot Gambhir" src="../images/me.JPG" />
                    </StyledBadge>
                    <CardContent>
                        <Box display="grid" gridGap="16px">
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h5" component="h2">
                                    Prabhjyot Gambhir
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Full Stack Web Developer
                                </Typography>
                            </Box>
                            <Divider />
                            <div>
                                <Grid container>
                                    <Box width="100%" display="grid" gridTemplateColumns="auto" gridGap="8px">
                                    <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle2">
                                        Residence:
                                    </Typography>
                                    <Typography variant="body2">
                                        India
                                    </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle2">
                                        City:
                                    </Typography>
                                    <Typography variant="body2">
                                        Vancouver, BC
                                    </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between">
                                    <Typography variant="subtitle2">
                                        Age
                                    </Typography>
                                    <Typography variant="body2">
                                        28
                                    </Typography>
                                    </Box>
                                    </Box>
                                </Grid>
                            </div>
                            <Divider />
                            <Divider />
                            <Box display="flex" flexDirection="column">
                                <SkillSection />
                            </Box>
                            <Divider />
                            <Box>
                                <SocialSection />
                            </Box>
                        </Box>
                    </CardContent>
                    </animated.div>
                </Box>
            </Container>
        </Box>

    )
}

export default LeftPanel;