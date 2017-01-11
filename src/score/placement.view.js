import React, {PropTypes} from 'react';

import {playerPropType} from "../player/player.prop-types";

const propTypes = {
  rank: PropTypes.number.isRequired,
  score: PropTypes.oneOfType([
    PropTypes.number, //Score value
    PropTypes.string, //or empty string
  ]).isRequired,
  players: PropTypes.arrayOf(playerPropType.isRequired).isRequired,
};

const PlacementView = ({
  rank,
  score,
  players,
}) => (
  <div className="sbio-placement">
    <span className="rank">
      <span className={'rank-value rank-' + rank} />
      <span className="score">{score}</span>
    </span>
    <span className="players">{players.map(player => player.name).join(', ')}</span>
  </div>
);

PlacementView.propTypes = propTypes;

export default PlacementView;
