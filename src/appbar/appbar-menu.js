import {connect} from "react-redux";

import {resetScores} from '../score/score.actions';
import SbioAppbarMenuView from './appbar-menu.view';
import {newGame} from "../app.actions";
import {addPlayer} from "../player/players.actions";

const ownPropsTypes = {
};

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRematch: function () {
      dispatch(resetScores());
    },
    onNewGame: function () {
      console.log('New Game');

      dispatch(newGame());

      let appData = require('../app-data.json');

      appData.players.forEach((player) => {
        dispatch(addPlayer(player));
      });
    }
  }
};

const SbioAppbarMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(SbioAppbarMenuView);

SbioAppbarMenu.propTypes = ownPropsTypes;

export default SbioAppbarMenu;
