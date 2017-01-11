import {connect} from 'react-redux';

import SbioPlayerScoresListView from './player-scores-list.view';

const mapStateToProps = (state) => {
  return {
    playerIds: state.scores.map(score => score.playerId)
  }
};

const mapDispatchToProps = () => {
  return {}
};

const PlayerScoresList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SbioPlayerScoresListView);

export default PlayerScoresList;
