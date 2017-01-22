import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {newGame, rematch} from '../app.actions';
import {createPlayer} from '../player/player.actions';

import AppbarMenuView from './appbar-menu.view';

const ownPropsTypes = {};

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRematch: function () {
      dispatch(rematch());
    },

    onNewGame: function () {
      dispatch(newGame());

      let appData = require('../app-data.json');
      appData.players.forEach((player) => {
        dispatch(createPlayer(player));
      });
    },

    onScoreHistory: function () {
      dispatch(push('/scores/history'));
    },

    onAbout: function () {
      dispatch(push('/about'));
    }
  }
};

const AppbarMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarMenuView);

AppbarMenu.propTypes = ownPropsTypes;

export default AppbarMenu;
