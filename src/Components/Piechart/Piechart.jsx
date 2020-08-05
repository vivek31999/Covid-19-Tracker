import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {Grid, Paper, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

	const useStyles = makeStyles({
	  option: {
	    	order : 2
	}
	});

const Piechart = () =>{

	const population = useSelector(state=> state.dataStore.countryData.population)
	const active = useSelector(state=> state.dataStore.countryData.active)
	const deaths = useSelector(state=> state.dataStore.countryData.deaths)
	const recovered = useSelector(state=> state.dataStore.countryData.recovered)
	
	const classes = useStyles()

	const series = [ active,deaths, recovered]
    const options =  {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: [ ' Active Cases','Deaths', 'Recovered'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
          
	return(
			<Grid item lg={6} className={classes.option}>
		 		<Paper elevation={2}>
		 			<ReactApexChart options={options} series={series} type="pie" width={380} />
		 		</Paper>
			</Grid>
		)
}

export default Piechart;