import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
                <RouteWithLayout exact component={HomeView} layout={Main} path="/discover" />
                <RouteWithLayout exact component={QuizView} layout={Main} path="/quiz" />
                <RouteWithLayout exact component={AboutView} layout={Main} path="/about" />
            </Switch>
        )
    }
}


export default Routes;