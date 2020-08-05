import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Layout from '../../Containers/Layout';
import Countrylist from '../../Components/Countrylist/Countrylist';
import CountryInfo from '../../Components/CountryInfo/CountryInfo';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Piechart from '../../Components/Piechart/Piechart';
import TimeLine from '../../Components/TimeLine/Timeline';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
	countryinfo : {
		order : 1
	},
}))

const CountryMain = () =>{

	const classes = useStyles();

	const checkData = useSelector((state)=>{
		if(state.dataStore.countryData) {
			return  state.dataStore.countryData.countryInfo;
		}
			else return null
	})

	const error = useSelector((state)=>{
		if(state.dataStore.error) {
			return  state.dataStore.error;
		}
			else return null
	})

	function CountryComponents(){
		return(
			<React.Fragment>
					<Grid container item lg={12} spacing={1}>
						<CountryInfo/>
						<Piechart/>
						<TimeLine country={true}/>
					</Grid>
			</React.Fragment>
			)
	}

	return (
			<Layout>
				<Grid item lg={8} className={classes.countryinfo}>
					<SearchBar/>
						{
							error?<h4>{error}</h4>:(checkData?<CountryComponents/>:' ')
						}
				</Grid>
				<Countrylist enable={true}/>
			</Layout>
		)
}

export default CountryMain;
