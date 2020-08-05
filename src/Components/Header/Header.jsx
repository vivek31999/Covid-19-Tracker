import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./Header.scss";

const useStyle = makeStyles((theme) => ({
	header : {
		order : 1,
		[theme.breakpoints.down('md')] : {
			order : 1,
			width : '100%'
		},
	},
}))

const Header = () =>{
	const classes = useStyle();
	return (
		<Grid item lg={12} md={12} sm={12} className={classes.header}>
			<Paper className="Header__edit">
				<Typography variant="h4" className="Header__heading">Covid-19 Tracker</Typography>
			</Paper>
		</Grid>
	)
}

export default Header;