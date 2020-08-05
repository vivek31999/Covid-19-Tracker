import React from 'react';
import {Grid, Button, Paper} from '@material-ui/core';
import {MemoryRouter as Router} from 'react-router';
import {Link as RouterLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({

	Buttons : {
		order : 2,
		width : '100%',
		flexDirection : 'coloumn',
	},

	paper : {
		padding : '10px',
		display : 'flex',
		justifyContent : 'space-evenly'
	}
}));

const Buttons = () =>{
	const classes = useStyles();
	return (
		// <Router>
			<Grid item lg={12} className={classes.Buttons}>
					<Paper elevation={2} className={classes.paper} >
						<Button variant='outlined' component={RouterLink} to='/country' >Show Country Wise</Button>
						<Button variant='outlined'>World Map</Button>
					</Paper>
			</Grid>
		// </Router>
		)
}

export default Buttons;