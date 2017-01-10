import * as React from 'react';
import SbioAppBarView from '../appbar/appbar.view';
import SbioSummery from '../score/summery';
import SbioPlayerScoresList from '../player-score/player-scores-list';

class ScoreboardIO extends React.Component {
  render() {
    return (
      <div className="sbio-scoreboard-io">
        <SbioAppBarView />
        <SbioSummery />
        <SbioPlayerScoresList />
      </div>
    );
  }
}

export default ScoreboardIO;
