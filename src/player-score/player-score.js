import {PropTypes} from 'react';
import {connect} from 'react-redux';

import SbioPlayerScoreView from './player-score.view';
import {incrementPlayerScore, decrementPlayerScore} from '../score/score.actions';

const ownPropsTypes = {
  playerId: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    player: state.players.find(p => p.id === ownProps.playerId),
    score: state.scores.find(s => s.playerId === ownProps.playerId)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onScorePlus: function () {
      dispatch(incrementPlayerScore(ownProps.playerId));
    },
    onScoreMinus: function () {
      dispatch(decrementPlayerScore(ownProps.playerId));
    }
  }
};

const SbioPlayerScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(SbioPlayerScoreView);

SbioPlayerScore.propTypes = ownPropsTypes;

export default SbioPlayerScore;
