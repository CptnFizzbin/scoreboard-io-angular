import * as React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class SbioAppbarMenuView extends React.Component {
  render () {
    return (
      <IconMenu
        iconButtonElement={(
          <IconButton>
            <MoreVertIcon color={this.props.muiTheme.palette.alternateTextColor} />
          </IconButton>
        )}
      >
        <MenuItem primaryText="Rematch" onClick={this.props.onRematch} />
        <MenuItem primaryText="New Game" onClick={this.props.onNewGame} />
      </IconMenu>
    );
  }
}

export default muiThemeable()(SbioAppbarMenuView);
