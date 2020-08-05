import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactApexChart from 'react-apexcharts';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    timeline : {
    	marginTop : '10px',
        order : 5,
        [theme.breakpoints.down("sm")]: {
        order : 5,
        width : '100%'
    	},
    },

    grid : {
    	order : 3,
    	[theme.breakpoints.up("sm")]: {
        order : 3,
        width : '100%'
    	},
    }
}));

const Timeline = ({country}) =>{
	const classes = useStyles();
	const cases = useSelector((state)=>{
		if(country) return state.dataStore.countryTimeline.cases; 
		else return state.dataStore.casesTimeline.cases; 
	})
	const timing = useSelector((state)=>{
		if (country) return state.dataStore.countryTimeline.timing;
		else return state.dataStore.casesTimeline.timing;
	})

	 var arr = []
	 timing.forEach(function(data, index){
	 	var temp1 = {}
	 	var temp2 = {}
	 	temp1.x = data
	 	temp1.y = cases[index]
	 	arr.push(temp1)
	 })

	 var series = [
	    {
	      name: "Total Cases",
	      data: arr
	    }
	  ] 
	  var options = {
		  chart: {
		    height: 380,
		    width: "100%",
		    type: "area",
		    animations: {
		      initialAnimation: {
		        enabled: false
		      }
		    }
		  },

		 stroke : {
		 	width : 2
		 },

		xaxis : {
				 type: "datetime"
				},

		yaxis : {
			title : {
				text : 'Total Cases',
				rotate : 90,
				offsetX: 0,
		        offsetY: 0,
		        style : {
		        	fontSize : '15px'
		        }
			}
		}
		}

		console.log(country)
                   

	return(
			<Grid item lg={country?12:6} md={6} className={country?classes.grid:classes.timeline}>
				<Paper elevation={2}>
					  <ReactApexChart options={options} series={series} type="line" height={350} />
				</Paper>
			</Grid>
		)
}

export default Timeline;