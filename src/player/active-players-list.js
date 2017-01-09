import {connect} from 'react-redux';

import SbioPlayerScoreListView from '../player-score/player-score-list.view';

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
};

const mapDispatchToProps = () => {
  return {}
};

const SbioActivePlayersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SbioPlayerScoreListView);

export default SbioActivePlayersList;
