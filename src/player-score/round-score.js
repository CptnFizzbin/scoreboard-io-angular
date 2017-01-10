import {PropTypes} from 'react';
import {connect} from 'react-redux';

import SbioRoundScoreView from './round-score.view';

const ownPropsTypes = {
  playerId: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let playerScore = state.scores
    .find(score => score.playerId === ownProps.playerId);

  return {
    active: state.round.roundActive && playerScore.scoreChanged,
    ending: state.round.roundEnding && playerScore.scoreChanged,
    score: playerScore.roundScore
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

const SbioRoundScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(SbioRoundScoreView);

SbioRoundScore.propTypes = ownPropsTypes;

export default SbioRoundScore;
