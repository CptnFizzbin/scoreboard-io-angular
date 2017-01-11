import * as React from 'react';
import AppbarView from '../appbar/appbar.view';
import Summery from '../score/summery';
import PlayerScoresList from '../player-score/player-scores-list';

const ScoreboardIO = () => (
  <div className="sbio-scoreboard-io">
    <AppbarView />
    <Summery />
    <PlayerScoresList />
  </div>
);

export default ScoreboardIO;
