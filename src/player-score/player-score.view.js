import React, {PropTypes} from 'react';

import ActiveRoundScore from './active-round-score';
import ScoreEditorView from '../score/score-editor.view';

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
      <span className="player-name">
        {player.name}
      </span>
      <span className="round-score">
        <ActiveRoundScore playerId={player.id}/>
      </span>
      <ScoreEditorView
        onScoreMinus={onScoreMinus}
        onScorePlus={onScorePlus}
        score={score}
      />
    </div>
  </div>
);

PlayerScoreView.propTypes = propTypes;

export default PlayerScoreView;

