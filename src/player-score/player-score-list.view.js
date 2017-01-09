import React, {PropTypes} from "react";
import Divider from 'material-ui/Divider';

import SbioPlayerScore from './player-score';

import './player-score-list.scss';

const propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

class SbioPlayerScoreListView extends React.Component {
  render() {
    return (
      <div className="sbio-player-score-list">
        {
          [...this.props.players]
            .map(player => (<SbioPlayerScore key={'player-' + player.id} playerId={player.id} />))
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
