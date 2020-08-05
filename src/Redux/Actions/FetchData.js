import axios from 'axios';

export const overAll = (Data) =>{
	return {
		type : 'GET_OVERALL',
		Data
	}
}

export const Countrysort=(Data)=>{
	return {
		type : 'COUNTRY_SORT_TODAYCASES',
		Data
	}
}

export const CountryCases = (Data)=>{
	return{
		type : 'COUNTRY_SORT_CASES',
		Data
	}
}

export const timelineAll = (Data) =>{
	return{
		type:'GET_ALL_TIMELINE',
		Data
	}
}

export const country = (Data) =>{
	return{
		type : 'INDIVIDUAL_COUNTRY',
		Data
	}
}

export const getCountryTimeline = (Data) =>{
	return {
		type : 'COUNTRY_TIMELINE',
		Data
	}
}

export const ErrorOn = () =>{
	return {
		type : 'COUNTRY_ERROR_ON'
	}
}

export const ErrorOff = () =>{
	return {
		type : 'COUNTRY_ERROR_OFF'
	}
}

export const LoadingOn = () =>{
	return{
		type : 'LOADING_ON'
	}
}

export const LoadingOff = () =>{
	return{
		type : 'LOADING_OFF'
	}
}



// export const chartLoadingOn = () =>{
// 	return{
// 		type : 'CHART_LOADING_ON'
// 	}
// }

// export const chartLoadingOff = () =>{
// 	return{
// 		type : 'CHART_LOADING_OFF'
// 	}
// }

export const getOverall =()=>{
	return async (dispatch)=>{
		dispatch(LoadingOn())
		var config = {
		  method: 'get',
		  url: 'https://corona.lmao.ninja/v2/all?yesterday',
		  headers: {
		  yesterday: true }
		};
		axios(config)
		.then(res =>{
			dispatch(overAll(res.data));
			console.log(res.data);
			dispatch(getCountryToday());
			dispatch(LoadingOff());
		})
		.catch(err=>{
			console.log(err)
		})
	}
}

export const getCountryToday=()=>{
	return async (dispatch)=>{

		axios.get('https://corona.lmao.ninja/v2/countries',{
			params : {
				yesterday : true,
				sort : 'todayCases'
			}
		})
		.then((res)=>{
			dispatch(Countrysort(res.data.slice(0,31)));
			dispatch(getCountryCases());
			// console.log(res.data);
		})
		.catch(err=>{
			console.log(err);
		})
	}
}

export const getCountryCases=()=>{
	return async (dispatch)=>{

		axios.get('https://corona.lmao.ninja/v2/countries',{
			params : {
				yesterday : true,
				sort : 'cases'
			}
		})
		.then((res)=>{
			// dispatch(chartLoadingOn());
			dispatch(getTimelineAll());
			dispatch(CountryCases(res.data.slice(0,10)));
		})
		.catch(err=>{
			console.log(err)
		})
	}
}

const getTimelineAll = () =>{
	return async (dispatch) =>{
		var config = {
			method : 'get',
			url : 'https://disease.sh/v2/historical/all?lastdays=all',
			header : {}
		}

		axios(config).
		then(res=>{
			const result = {
				cases : Object.values(res.data.cases),
				timing : Object.keys(res.data.cases)
			}
			dispatch(timelineAll(result))
		}).
		catch(err=>{
			console.log(err)
		})
	}
}


export const individualCountry = (code) =>{
	return async (dispatch, getState)=>{
		var config = {
		  method: 'get',
		  url: `https://corona.lmao.ninja/v2/countries/${code}?yesterday&strict&query`,
		  headers: { }
		};

		axios(config)
		.then(function (response) {
		  console.log(response.data);
		  dispatch(country(response.data));
		  dispatch(countryTimeline(code));
		  if(getState().dataStore.error){
		  	dispatch(ErrorOff());
		  }

		})
		.catch(function (error) {
		  dispatch(ErrorOn());
		});

	}
}

export const countryTimeline = (code)=>{
	return async (dispatch)=>{

		var config = {
		  method: 'get',
		  url: `https://corona.lmao.ninja/v2/historical/${code}?lastdays=200`,
		  headers: { }
		};

		axios(config)
		.then(function (response) {
		  console.log(response.data);
		  const result = {
		  		timing : Object.keys(response.data.timeline.cases),
		  		cases : Object.values(response.data.timeline.cases)
			}
			dispatch(getCountryTimeline(result))
		})
		.catch(function (error) {
			console.log(error);
		});

	}
} 

