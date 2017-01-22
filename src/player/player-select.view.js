import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {playerPropType} from "./player.prop-types";

const propTypes = {
  players: PropTypes.arrayOf(playerPropType).isRequired,
  selectedId: PropTypes.number,

  onPlayerSelect: PropTypes.func.isRequired,
};

const PlayerSelectView = ({
  players,
  selectedId,

  onPlayerSelect,
}) => (
  <SelectField
    fullWidth={true}
    floatingLabelText="Player"
    value={selectedId}
    onChange={onPlayerSelect}
  >
    {players.map(player => (
      <MenuItem key={player.id} value={player.id} primaryText={player.name}/>
    ))}
  </SelectField>
);

PlayerSelectView.propTypes = propTypes;

export default PlayerSelectView;
