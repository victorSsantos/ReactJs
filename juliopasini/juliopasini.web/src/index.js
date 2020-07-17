import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LandingPage from './landingPage/LandingPage'

ReactDOM.render(
  (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
            </Switch>
        </App>
    </Router>
),
document.getElementById('root')
);

serviceWorker.unregister();
