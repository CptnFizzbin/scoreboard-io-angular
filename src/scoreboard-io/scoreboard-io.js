import * as React from 'react';
import Appbar from '../appbar/appbar';

const ScoreboardIO = ({
  children,
  location,
}) => (
  <div className="sbio-scoreboard-io">
    <Appbar curLocation={location} />
    {children}
  </div>
);

export default ScoreboardIO;
