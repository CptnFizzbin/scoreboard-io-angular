import {PropTypes} from 'react';
import {connect} from 'react-redux';

import PreviousRoundScoresView from './previous-round-scores.view';

const ownPropsTypes = {
  playerId: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let playerScore = state.scores
    .find(score => score.playerId === ownProps.playerId);

  return {
    roundScores: playerScore.roundScores || []
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

const PreviousRoundScores = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviousRoundScoresView);

PreviousRoundScores.propTypes = ownPropsTypes;

export default PreviousRoundScores;
