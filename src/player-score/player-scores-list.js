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

const SbioPlayerScoresList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SbioPlayerScoresListView);

export default SbioPlayerScoresList;
