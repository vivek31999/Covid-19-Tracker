import React from 'react';
import Overall from '../Components/Overall/Overall';
import Countrylist from '../Components/Countrylist/Countrylist';
import Layout from '../Containers/Layout';
import Header from '../Components/Header/Header';
import CountryBarGraph from '../Components/CountryBarGraph/CountryBarGraph';
import Timeline from '../Components/TimeLine/Timeline';
import Buttons from '../Components/Buttons/Buttons';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useSyles = makeStyles((theme)=>({
	gridOrder : {
		order : 3,
		marginTop : '10px'
	}
}))

const Main = () =>{
	const classes = useSyles();
    return(
        	<Layout>
	            <Overall />
	            <Countrylist/>
	            <Grid container item lg={4} className={classes.gridOrder}>
	            	<Header/>
	            	<Buttons/>
	            </Grid>
	            <CountryBarGraph/>
	            <Timeline/>
        	</Layout>
    );
}

export default Main;