//react imports
import React, {Component} from 'react';
import {Provider as StoreProvider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

//redux imports
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import {persistStore, autoRehydrate} from 'redux-persist'

//other vendor imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//application imports
import reducers from './app.reducer';
import epics from "./app.epics";
import ScoreboardIO from './scoreboard-io/scoreboard-io';

//asset imports
import './app.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


//============================
// Configure Redux Middleware
const epicMiddleware = createEpicMiddleware(epics);

export let store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(epicMiddleware)
  ),
  autoRehydrate()
);
persistStore(store);

class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <MuiThemeProvider>
          <ScoreboardIO/>
        </MuiThemeProvider>
      </StoreProvider>
    );
  }
}

export default App;
