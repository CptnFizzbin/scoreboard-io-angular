import {connect} from 'react-redux';

import PlayerSelectView from './player-select.view'

const propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.players,
    selectedId: ownProps.selectedId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPlayerSelect: (event, index, value) => {
      ownProps.onPlayerSelect(value);
    }
  };
};

const PlayerSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSelectView);

PlayerSelect.propTypes = propTypes;

export default PlayerSelect;
