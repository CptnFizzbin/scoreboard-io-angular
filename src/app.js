import * as React from 'react';
import {Provider as StoreProvider} from 'react-redux'
import {createStore} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {persistStore, autoRehydrate} from 'redux-persist'

import {addPlayer} from "./player/players.actions";
import reducers from './app.reducer';
import ScoreboardIO from './scoreboard-io/scoreboard-io';

import './app.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  autoRehydrate()
);
export let persistor = persistStore(store);

class App extends React.Component {
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
