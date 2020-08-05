import React from 'react';
import {useSelector} from 'react-redux';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactApexChart from 'react-apexcharts';

const useStyles = makeStyles((theme) => ({
    chart : {
    	marginTop : '10px',
    	marginRight : '0px',
        order : 4,
        [theme.breakpoints.down("sm")]: {
        order : 4,
        width : '100%'
    },
    },
}));

const CountryBarGraph = () =>{
	const data = useSelector(state=>state.dataStore.countrySortByCases);
	const classes = useStyles();
	const tempSeries = data.map(dat=>dat.cases);
	const tempName = data.map(dat=>dat.country)

	const series =  [{
			  name : 'Total Cases',
              data:tempSeries.slice(0,10)
            }]

     const options =  {
              chart: {
                height: 350,
                type: 'bar',
                events: {
                  click: function(chart, w, e) {
                  }
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: '45%',
                  distributed: true
                }
              },
              dataLabels: {
                enabled: false
              },
              legend: {
                show: false
              },
              xaxis: {
                categories: tempName.slice(0,10),
                labels: {
                  style: {
                    fontSize: '12px'
                  }
                }
              },
              yaxis : {
              	title: {
		          text: 'Total Cases',
		          rotate: 90,
		          offsetX: 0,
		          offsetY: 0,
		          style: {
		              color: undefined,
		              fontSize: '15px',
		              fontFamily: 'Helvetica, Arial, sans-serif',
		              fontWeight: 600,
		              cssClass: 'apexcharts-yaxis-title',
		          },
		      },
              }
            }
	return (
			<Grid item lg={6} md={6} className={classes.chart}>
				  <Paper elevation={3}><ReactApexChart options={options} series={series} type="bar" height={350} /></Paper>
			</Grid>
		)
}

export default CountryBarGraph;