import React, {useEffect, useState, useReducer} from "react";
import { Paper, Typography, Grid, CircularProgress } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import axios from 'axios'
import './Overall.scss';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
            
const useStyles = makeStyles((them) => ({

    paper: {
        whiteSpace: 'nowrap',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },

    overall : {
        order : 1,
        [them.breakpoints.down('md')] : {
            order : 2,
        },
    },

}))

const Overall = () => {

    const classes = useStyles();
    const data = useSelector((state)=>state.dataStore.overall);
    const loading = useSelector((state)=>state.dataStore.isLoading);

    return (
        <Grid container item lg={4} md={6} sm={12} xs={12} className={classes.overall}>
            <ThemeProvider theme={theme}>
            <Paper className="Overall__paper" elevation={3} >
                    <Typography variant="h5" style={{textAlign : 'center', marginBottom : '15px'}} >Overall Information</Typography>
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} xs={6} >
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom >New/Active</Typography>
                                {loading?<CircularProgress size={20}/>:<Typography>+{data.todayCases}/{data.active}</Typography>}
                            </Paper>
                        </Grid>
                        <Grid item lg={6} md={6} xs={6} >
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom>Total Confirmed</Typography>
                                {loading?<CircularProgress size={20}/>:<Typography>{data.cases}</Typography>}
                            </Paper>
                        </Grid>
                        <Grid item lg={6} md={6} xs={6} >
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom>Recent Recovered</Typography>
                                {loading?<CircularProgress size={20}/>:<Typography>+{data.todayRecovered}</Typography>}
                            </Paper>
                        </Grid>
                        <Grid item lg={6} md={6} xs={6} >
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom>Total Recovered</Typography>
                                {loading?<CircularProgress size={20}/>:<Typography>{data.recovered}</Typography>}
                            </Paper>
                        </Grid>
                        <Grid item lg={6} md={6} xs={6} >
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom>Recent Deaths</Typography>
                                {loading?<CircularProgress size={20}/>:<Typography>+{data.todayDeaths}</Typography>}
                            </Paper>
                        </Grid>
                        <Grid item lg={6} md={6} xs={6} >
                            <Paper className={classes.paper}>
                                <Typography variant="h6" gutterBottom>Total Deaths</Typography>
                                {loading?<CircularProgress size={20}/>:<Typography>{data.deaths}</Typography>}
                            </Paper>
                        </Grid>
                    </Grid>
            </Paper>
        </ThemeProvider>
        </Grid>
    )
}

export default Overall;
