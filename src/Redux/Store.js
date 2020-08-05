import Datastore from './Reducer/Datastore';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	dataStore : Datastore
})

export default rootReducer;

