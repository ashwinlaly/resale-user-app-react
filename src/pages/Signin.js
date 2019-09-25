import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => (
    {
        root : {
            flexGrow : 1
        },
        paper : {
            margin : theme.spacing(0)
        }
    }
));

function Signin() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid spacing={12}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>e</Paper>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </div>
      )
}

export default Signin;