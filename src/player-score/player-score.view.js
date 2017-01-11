import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutlineIcon from 'material-ui/svg-icons/content/remove-circle-outline';

import RoundScore from './active-round-score';
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
  }).isRequired,

  onScoreMinus: PropTypes.func.isRequired,
  onScorePlus: PropTypes.func.isRequired
};

const PlayerScoreView = ({
  player,
  score,
  onScoreMinus,
  onScorePlus,
}) => (
  <div className="sbio-player-score">
    <div className="player-info">
      <span className="player-name">{player.name}</span>
      <span className="round-score">
        <RoundScore playerId={player.id}/>
      </span>
      <span className="score">
        <IconButton onTouchTap={onScoreMinus} disableTouchRipple={true}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <span className="score-value">{score.value}</span>
        <IconButton onTouchTap={onScorePlus} disableTouchRipple={true}>
          <AddCircleOutlineIcon />
        </IconButton>
      </span>
    </div>
    <PreviousRoundScores playerId={player.id} />
  </div>
);

PlayerScoreView.propTypes = propTypes;

export default PlayerScoreView;

