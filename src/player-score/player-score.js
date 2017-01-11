import {PropTypes} from 'react';
import {connect} from 'react-redux';

import PlayerScoreView from './player-score.view';
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

const PlayerScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerScoreView);

PlayerScore.propTypes = ownPropsTypes;

export default PlayerScore;
