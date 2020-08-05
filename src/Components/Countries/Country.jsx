import React from 'react';
import {Grid, Paper, Typography, makeStyles} from '@material-ui/core';
import './Country.scss';

const Country = ({countryItem}) =>{
	return (
		<Paper className="Countrylist_countryname" >
            <Grid item lg={12}>
                <Typography variant='h5' style={{marginBottom: '5px'}} >{countryItem.country}<span> <img style={{height:'10px',width:'20px',justifyContent:'flex-end',alignSelf:'flex-end'}}src={countryItem.countryInfo.flag}/> </span></Typography>
            </Grid>
            <Grid item lg={12}>
                <Grid item lg={6}><Typography className="Country__font">Recent Cases : <span>{countryItem.todayCases}</span></Typography></Grid>
                <Grid item lg={6}><Typography className="Country__font">Recent Deaths : <span>{countryItem.todayDeaths}</span></Typography></Grid>
            </Grid>
        </Paper>
	)
}
export default Country;