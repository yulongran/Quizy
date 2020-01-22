import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
    HomeView,
    QuizView,
    AboutView,
} from './views/index';
import { RouteWithLayout } from './components';
import { Main } from './layouts';



class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect
                    exact
                    from="/"
                    to="/discover"
                />
                <RouteWithLayout exact component={HomeView} layout={Main} path="/discover" />
                <RouteWithLayout exact component={QuizView} layout={Main} path="/quiz" />
            </Switch>
        )
    }
}


export default Routes;