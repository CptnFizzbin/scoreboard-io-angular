import React, {PropTypes} from "react";
import Divider from 'material-ui/Divider';

import PlayerScore from './player-score';

const propTypes = {
  playerIds: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

function joinWithDivider(accu, elem, index) {
  return accu === null ?
    [elem] :
    [...accu, <Divider key={'divider-' + index}/>, elem];
}

const PlayerScoreListView = ({
  playerIds,
}) => (
  <div className="sbio-player-score-list">
    {
      [...playerIds]
        .map(playerId => (<PlayerScore key={'player-' + playerId} playerId={playerId} />))
        .reduce(joinWithDivider, null)
    }
  </div>
);

PlayerScoreListView.propTypes = propTypes;

export default PlayerScoreListView;
