import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducers';
import thunk from 'redux-thunk';

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
