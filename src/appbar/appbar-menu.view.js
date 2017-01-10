import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

function SbioAppbarMenuView({muiTheme, onRematch, onNewGame}){
  return (
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
  );
}

export default muiThemeable()(SbioAppbarMenuView);
