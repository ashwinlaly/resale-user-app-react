import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link ,Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'; 

import Signin from './Signin';
import Signup from './Signup';

const useStyle = makeStyles( theme => ({
    menu : {
        width : '100%'
    },
    button : {
        color : 'white'
    }
}));

function Header () {
    
    const classes = useStyle();

    return (
        <Fragment>
            <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" >
                        Resale
                    </Typography>
                    <Typography variant="h5" align='right' className={classes.menu}>
                        <Button component={Link} to='/' className={classes.button} >Sign in</Button> /
                        <Button component={Link} to='/test' className={classes.button} >Sign up</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route  path='/' exact component={Signin} />
                <Route  path='/test' exact component={Signup} />
            </Switch>
            </Router>
        </Fragment>
    );
}

export default Header;