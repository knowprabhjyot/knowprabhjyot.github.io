import { Box, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/common/footer/footer';
import Header from './components/common/header/header';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import { animated, useTransition } from 'react-spring';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';

const Routes = () => {
    let location = useLocation();
    console.log(location);
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(100%,0,0)' }
    });
    return (
        <div>
            <Header />
            <Grid sm={12}>
                <Box display="grid" gridGap="24px">
                    {transitions.map(({ item, props, key }) => (
                        <animated.div key={key} style={props} >
                            <Switch location={item}>
                                <Route exact path="/" component={Home} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/about" component={About} />
                                <Route path="/portfolio" component={Portfolio} />
                            </Switch>
                        </animated.div>
                    ))}
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={1000}>
                        <Box display="flex" justifyContent="flex-end">
                        <IconButton color="secondary" aria-label="scroll">
                            <ArrowUpwardIcon />
                            </IconButton>
                        </Box>
                    </Link>
                    <Footer />
                </Box>
            </Grid>
        </div>
    )
}

export default Routes;