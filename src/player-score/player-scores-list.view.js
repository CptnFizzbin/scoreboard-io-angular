import React, {PropTypes} from "react";
import Divider from 'material-ui/Divider';

import SbioPlayerScore from './player-score';

const propTypes = {
  playerIds: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

class SbioPlayerScoreListView extends React.Component {
  render() {
    return (
      <div className="sbio-player-score-list">
          {
          [...this.props.playerIds]
            .map(playerId => (<SbioPlayerScore key={'player-' + playerId} playerId={playerId} />))
            .reduce((accu, elem, index) => {
              return accu === null ? [elem] : [...accu, <Divider key={'divider-' + index} />, elem];
            }, null)
        }
      </div>
    );
  }
}

SbioPlayerScoreListView.propTypes = propTypes;

export default SbioPlayerScoreListView;
