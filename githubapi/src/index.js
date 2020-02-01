import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/search';
import Result from './components/result';
import NotFound from './components/notfound';

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route path="/result" component={Result}/>
                    <Route path="/notfound" component={NotFound}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);