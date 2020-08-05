import React ,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useDispatch } from 'react-redux';
import Main from './Pages/Main';
import {getOverall} from './Redux/Actions/FetchData';
import CountryMain from './Pages/CountryPage/CountryMain';

const App = () =>{
  const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getOverall());
},[]);


  return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main } />
                <Route path="/country" component={CountryMain}/>
            </Switch>
        </Router>
  );
}

export default App;
