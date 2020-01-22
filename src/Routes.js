import React from 'react';
import { Switch} from 'react-router-dom';
import {
    HomeView,
    QuizView,
} from './views/index';
import { RouteWithLayout } from './components';
import { Main } from './layouts';



class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <RouteWithLayout exact component={HomeView} layout={Main} path="/" />
                <RouteWithLayout exact component={QuizView} layout={Main} path="/quiz" />
            </Switch>
        )
    }
}


export default Routes;