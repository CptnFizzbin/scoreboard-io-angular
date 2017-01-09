import * as React from 'react';
import SbioAppBarView from '../appbar/appbar.view';
import SbioActivePlayersList from '../player/active-players-list';

class ScoreboardIO extends React.Component {
  render() {
    return (
      <div className="sbio-scoreboard-io">
        <SbioAppBarView />
        <SbioActivePlayersList />
      </div>
    );
  }
}

export default ScoreboardIO;
