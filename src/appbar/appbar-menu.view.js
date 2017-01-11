import React, {PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const propTypes = {
  onRematch: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
};

const AppbarMenuView = muiThemeable()(
  ({
    muiTheme,
    onRematch,
    onNewGame,
  }) => (
    <IconMenu
      iconButtonElement={(
        <IconButton>
          <MoreVertIcon color={muiTheme.palette.alternateTextColor} />
        </IconButton>
      )}
    >
      <MenuItem primaryText="Rematch" onClick={onRematch} />
      <MenuItem primaryText="New Game" onClick={onNewGame} />
    </IconMenu>
  )
);

AppbarMenuView.propTypes = propTypes;

export default AppbarMenuView;
