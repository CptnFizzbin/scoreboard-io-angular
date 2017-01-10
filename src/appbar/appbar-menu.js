import {connect} from "react-redux";

import {newGame, rematch} from "../app.actions";
import {createPlayer} from "../player/player.actions";

import SbioAppbarMenuView from './appbar-menu.view';

const ownPropsTypes = {
};

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRematch: function () {
      dispatch(rematch());
    },
    onNewGame: function () {
      console.log('New Game');

      dispatch(newGame());

      let appData = require('../app-data.json');
      appData.players.forEach((player) => {
        dispatch(createPlayer(player));
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
