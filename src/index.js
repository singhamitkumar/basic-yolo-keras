import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MenuContainer from "./components/Slideoutmenu/MenuContainer";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Producer from "../src/screens/producer-dashboard/producer";

const routing = (
<Router>
<div>
    <Route exact path="/" component={App}/>
    <Route path="/producer" component={Producer}/>
    
</div>


</Router>

)



ReactDOM.render(routing, document.getElementById('root'));

//ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


