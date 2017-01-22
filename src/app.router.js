import React from 'react';
import {Router as ReactRouter, Route, IndexRoute} from 'react-router';

import ScoreboardIO from './scoreboard-io/scoreboard-io';
import ScoresPage from './pages/scores-page';
import ScoreHistoryPage from './pages/score-history-page';
import AboutPage from './pages/about-page';

const Router = ({history}) => (
  <ReactRouter history={history}>
    <Route path="/" component={ScoreboardIO}>
      <IndexRoute component={ScoresPage}/>
      <Route path="scores/history" component={ScoreHistoryPage}/>
      <Route path="about" component={AboutPage}/>
    </Route>
  </ReactRouter>
);

export default Router;
