const initState = {
	overall : {},
	countrySortByTodayCases : [],
	countrySortByCases : [],
	casesTimeline : {
		cases : [],
		timing : []
	},
	isLoading : false,
	chartLoading : false,
	countryData : {},
	countryTimeline : {
		cases : [],
		timing : []	
	},
	error : ''
}

const DataStore = ( state = initState, action ) => {
	switch(action.type){
		case 'GET_OVERALL':
			return {
				...state,
				overall : action.Data	
			}

		case 'COUNTRY_SORT_TODAYCASES':
			return{
				...state,
				countrySortByTodayCases : action.Data
			}

		case 'COUNTRY_SORT_CASES':
			return{
				...state,
				countrySortByCases : action.Data
			}

		case 'GET_ALL_TIMELINE':
			return{
				...state,
				casesTimeline : {
					...state.casesTimeline,
					cases : action.Data.cases,
					timing : action.Data.timing
				}
			}

		case 'INDIVIDUAL_COUNTRY':
			return{
				...state,
				countryData : action.Data
			}

		case 'COUNTRY_TIMELINE':
			return {
				...state,
				countryTimeline : {
					...state.countryTimeline,
					cases : action.Data.cases,
					timing : action.Data.timing,
				}
			}

		case 'COUNTRY_ERROR_ON':
			return{
				...state,
				error : '!Country might be not effected or unsufficient data.'
			}

		case 'COUNTRY_ERROR_OFF':
			return{
				...state,
				error : ''
			}

		case 'LOADING_ON':
			return {
				...state,
				isLoading : true
			}

		case 'LOADING_OFF':
			return {
				...state,
				isLoading : false
			}

		// case 'CHART_LOADING_ON':
		// 	return {
		// 		...state,
		// 		chartLoading : true
		// 	}

		// case 'CHART_LOADING_OFF':
		// 	return {
		// 		...state,
		// 		chartLoading : false
		// 	}

		default :
			return state
	}
}

export default DataStore;