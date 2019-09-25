import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    menu :{
        width : '100%'
    },
    button : {
        color : 'white'
    }
}));

function Navbar(props) {

    const classes = useStyle(0);

    return (
        <Fragment>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5' align='right' className={classes.menu}>
                        { (props.loggedin === 0) ? <Button className={classes.button} component={Link} to='/'>Home</Button> : '' }
                        { (props.loggedin === 0) ? <Button className={classes.button} component={Link} to='/signin'>Sign in</Button> : '' }
                        { (props.loggedin === 0) ? <Button className={classes.button} component={Link} to='/signup'>Sign up</Button> : '' }
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default Navbar;