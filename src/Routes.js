import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Home as HomeView,
    Quiz as QuizView,
} from './views/index';



class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home">
                    <HomeView />
                </Route>
                <Route path="/quiz">
                    <QuizView />
                </Route>
            </Switch>
        )
    }
}


export default Routes;