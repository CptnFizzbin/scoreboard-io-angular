import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutlineIcon from 'material-ui/svg-icons/content/remove-circle-outline';

import './score-editor.scss';

const propTypes = {
  score: PropTypes.shape({
    value: PropTypes.number.isRequired
  }),
  showSign: PropTypes.bool,

  onScoreMinus: PropTypes.func.isRequired,
  onScorePlus: PropTypes.func.isRequired
};

function getScoreString(score, showSign) {
  let scoreString = score.toString();
  if (showSign && score >= 1) {
    scoreString = '+' + scoreString;
  }
  return scoreString
}

const ScoreEditorView = ({
  score,
  showSign,
  onScoreMinus,
  onScorePlus,
}) => (
  <div className="score-editor">
    <IconButton onClick={onScoreMinus}>
      <RemoveCircleOutlineIcon />
    </IconButton>
    <span className="score-value">{getScoreString(score.value, showSign)}</span>
    <IconButton onClick={onScorePlus}>
      <AddCircleOutlineIcon />
    </IconButton>
  </div>
);

ScoreEditorView.propTypes = propTypes;

export default ScoreEditorView;
