import React, {useEffect, useState}  from 'react';
import {useSelector} from 'react-redux';
import {Grid, Paper, Typography} from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme({
	 typography: {
	    subtitle1: {
    	  fontSize: 20,
    	},	
      h5 : {
      	fontSize : 25
      }
}
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme)=>({
	countryinfo : {
		order : 1
	},
	paper : {
		// width : '100%'
		margin : '10px',
		padding : '10px'
	},

	img : {
		height:'18px',
		width:'28px',
		justifyContent:'flex-end',
		float : 'right'
	} 
}))

// theme.typography.subtitle1 = {
// 	fontSize : '100px'
// }

const CountryInfo = ()=>{

	const country = useSelector((state)=>state.dataStore.countryData)

	const flag = useSelector((state)=>state.dataStore.countryData.countryInfo.flag)

	const classes = useStyles();
	return (
			<Grid item lg={6} className={classes.countryinfo}>
					<Paper elevation={2} className={classes.paper}>
						<ThemeProvider theme={theme}>
							<Typography variant="h5" >{country.country}<span><img src={flag} className={classes.img}/></span></Typography>
								<Typography variant="subtitle1">Active Cases : <span>{country.active.toLocaleString('en-US')}</span></Typography>
							<Typography variant="subtitle1">Recent Recovered : <span>+{country.todayRecovered.toLocaleString('en-US')}</span></Typography>
							<Typography variant="subtitle1">Total Recovered : <span>{country.recovered.toLocaleString('en-US')}</span></Typography>
							<Typography variant="subtitle1">Total Deaths : <span>{country.deaths.toLocaleString('en-US')}</span></Typography>
							<Typography variant="subtitle1">Total Cases : <span>{country.cases.toLocaleString('en-US')}</span></Typography>
						</ThemeProvider>

					</Paper>
			</Grid>
		)
}

export default CountryInfo;


/*
{updated: 1596458646348, cases: 18272018, todayCases: 45207, deaths: 693587, todayDeaths: 1153, …}
active: 6108568
activePerOneMillion: 786.68
affectedCountries: 215
cases: 18272018
casesPerOneMillion: 2344
critical: 65805
criticalPerOneMillion: 8.47
deaths: 693587
deathsPerOneMillion: 89
oneCasePerPeople: 0
oneDeathPerPeople: 0
oneTestPerPeople: 0
population: 7764987232
recovered: 11469863
recoveredPerOneMillion: 1477.13
tests: 345201944
testsPerOneMillion: 44456.22
todayCases: 45207
todayDeaths: 1153
todayRecovered: 30611
updated: 1596458646348
*/
