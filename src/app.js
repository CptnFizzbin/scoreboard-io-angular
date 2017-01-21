//react imports
import React from 'react';
import {Provider as StoreProvider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {browserHistory} from "react-router";

//redux imports
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import {persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';

//other vendor imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

//application imports
import reducers from './app.reducer';
import epics from './app.epics';
import Router from './app.router';

//asset imports
import './app.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//============================
// Configure Redux Middleware
const epicMware = createEpicMiddleware(epics);
const routerMware = routerMiddleware(browserHistory);

let store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(epicMware),
    applyMiddleware(routerMware),
    applyMiddleware(thunk),
  ),
  autoRehydrate()
);
persistStore(store);

const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <StoreProvider store={store}>
    <MuiThemeProvider>
      <Router history={history} />
    </MuiThemeProvider>
  </StoreProvider>
);

export default App;
