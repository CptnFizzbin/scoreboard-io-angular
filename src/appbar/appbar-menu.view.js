import React, {PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const propTypes = {
  onRematch: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
  onAbout: PropTypes.func.isRequired,
};

const AppbarMenuView = muiThemeable()(
  ({
    muiTheme,
    onRematch,
    onNewGame,
    onAbout,
  }) => (
    <IconMenu
      iconButtonElement={(
        <IconButton>
          <MoreVertIcon color={muiTheme.palette.alternateTextColor} />
        </IconButton>
      )}
    >
      <MenuItem primaryText="Rematch" onClick={onRematch} />
      <MenuItem primaryText="New Game" onClick={onNewGame}/>
      <Divider />
      <MenuItem primaryText="About" onClick={onAbout}/>
    </IconMenu>
  )
);

AppbarMenuView.propTypes = propTypes;

export default AppbarMenuView;
