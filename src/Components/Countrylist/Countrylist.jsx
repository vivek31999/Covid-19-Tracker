import React from 'react';
import {Grid, Paper, Typography,LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import Country from '../Countries/Country';
import "./Countrylist.scss";

const useStyles = makeStyles((theme) => ({
    country : {
        order : 2,
        [theme.breakpoints.down("md")]: {
        order : 3,
        width : '100%',
        }
    },
    countryEnable : {
        order : 2,
        [theme.breakpoints.down("md")]: {
        order : 2,
        width : '100%',
        }
    },
}));


const Countrylist = (props) => {
    const country = useSelector((state)=>state.dataStore.countrySortByTodayCases);
    const loading = useSelector(state => state.dataStore.isLoading);

    var countryBar = [country.map(count=>{
        return count.country;
    })]

    countryBar = countryBar[0].slice(0,10);

    console.log(countryBar);
    const classes = useStyles();
    return (
        <>
            <Grid item lg={4} md={6} sm={12} className={props.enable?classes.countryEnable:classes.country}>
                <Paper className="Countrylist_paper" elevation={2}>
                    <Typography variant="h5" style={{marginBottom : '15px'}}>Countries (Recent Cases)</Typography> 
                        <Grid item lg={12}>
                            <Paper className="Countrylist_container">
                                {
                                    loading?<LinearProgress/>:(<Grid item lg={12}>
                                    {
                                        country.map(count=><Country key={count.country} countryItem={count}/>)
                                    } 
                                </Grid>)
                                }
                            </Paper>    
                        </Grid> 
                </Paper>
            </Grid>
        </>
    )
}

export default Countrylist;