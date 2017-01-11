import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutlineIcon from 'material-ui/svg-icons/content/remove-circle-outline';

import SbioRoundScore from './active-round-score';
import PreviousRoundScores from '../round/previous-round-scores';

import './player-score.scss';

const propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  score: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  }).isRequired
};

class SbioPlayerScoreView extends Component {
  render() {
    return (
      <div className="sbio-player-score">
        <div className="player-info">
          <span className="player-name">{this.props.player.name}</span>
          <span className="round-score">
            <SbioRoundScore playerId={this.props.player.id}/>
          </span>
          <span className="score">
            <IconButton onTouchTap={this.props.onScoreMinus} disableTouchRipple={true}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="score-value">{this.props.score.value}</span>
            <IconButton onTouchTap={this.props.onScorePlus} disableTouchRipple={true}>
              <AddCircleOutlineIcon />
            </IconButton>
          </span>
        </div>
        <PreviousRoundScores playerId={this.props.player.id} />
      </div>
    );
  }
}

SbioPlayerScoreView.propTypes = propTypes;

export default SbioPlayerScoreView;

