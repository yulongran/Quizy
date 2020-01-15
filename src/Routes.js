import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Home as HomeView,
    Quiz as QuizView,
} from './views/index';
import { RouteWithLayout } from './components';
import { Main } from './layouts';



class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <RouteWithLayout exact component={HomeView} layout={Main} path="/home" />
                <RouteWithLayout exact component={QuizView} layout={Main} path="/quiz" />
            </Switch>
        )
    }
}


export default Routes;