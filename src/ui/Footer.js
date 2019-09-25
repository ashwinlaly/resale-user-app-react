import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer : {
        bottom : 0,
        left : 0,
        width : '100%',
        margin : theme.spacing(0),
        color : 'white',
        background: '#3f51b5',
        position : 'fixed'
    }
}));

function Footer (){

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            Footer of the Page
        </div>
    )

}

export default Footer;