import React, {useState} from 'react';
import {Grid, Paper, TextField, Button} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import {individualCountry} from '../../Redux/Actions/FetchData';
import {useDispatch} from 'react-redux';
import countries from './CountryConstants';


function countryToFlag(isoCode) {
	return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({

  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
    // grid : {
    // 	order : 1
    // },
    },
     margin : {
    	marginTop : '10px',
    	marginBottom : '10px'
  },
});


const SearchBar = ()=>{

	const [code, updateCode] = useState('');

	function onUpdate(event, value){
		if(value!=null)
			updateCode(value.code);
	}

	const dispatch = useDispatch();

	function callApi(){	
		dispatch(individualCountry(code));
	}

	const classes = useStyles();
	return (
			<Grid item lg={8} className={classes.grid}>
				<Autocomplete
			  onChange={onUpdate}
			  className={classes.margin}

		      id="country-select-demo"
		      style={{ width: 300 }}
		      options={countries}
		      classes={{
		        option: classes.option,
		      }}
		      autoHighlight
		      getOptionLabel={(option) => option.label}
		      renderOption={(option) => (
		        <React.Fragment>
		          <span>{countryToFlag(option.code)}</span>
		          {option.label} ({option.code}) +{option.phone}
		        </React.Fragment>
		      )}
			 
		      renderInput={(params) => (
		        <TextField
		          {...params}
		          label="Choose a country"
		          variant="outlined"
		          inputProps={{
		            ...params.inputProps,
		            autoComplete: 'off', // disable autocomplete and autofill
		          }}
		        />
		      )}
		    />
	    		<Button variant="contained" disabled={code?false:true} onClick={callApi}>Check</Button>
			</Grid>
		)
}

export default SearchBar;