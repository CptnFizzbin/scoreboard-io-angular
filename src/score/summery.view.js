import React from 'react';
import Paper from 'material-ui/Paper';

import PlacementView from './placement.view';

import './summery.scss';

const SummeryView = ({
  placements,
  round,
}) => (
  <Paper className="sbio-summery">
    <span className="title">Game Summery</span>{/* - Round {round}</span> */}
    {
      placements.map((placement, index) => {
        return (
          <PlacementView key={index}
                         rank={placement.rank}
                         score={placement.score}
                         players={placement.players}
          />
        )
      })
    }
  </Paper>
);

export default SummeryView;
