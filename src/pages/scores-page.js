import React from 'react';
import {connect} from "react-redux";

import Summery from '../score/summery';
import PlayerScoresList from '../player-score/player-scores-list';

const propTypes = {
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const ScorePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(() => (
  <div>
    <Summery />
    <PlayerScoresList />
  </div>
));

ScorePage.propTypes = propTypes;

export default ScorePage;
