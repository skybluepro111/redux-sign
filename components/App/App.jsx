import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
//import Login from '../Login/Login.jsx';
import login from '../../containers/login.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={login} />
            </Router>            
            
        );
    }
}