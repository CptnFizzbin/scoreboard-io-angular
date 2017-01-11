import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './active-round-score.scss';

const propTypes = {
  score: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  ending: PropTypes.bool.isRequired,
};

const ActiveRoundScoreView = ({
  score,
  active,
  ending,
}) => {
  let classes = classNames(
    {
      'active-round-score': true,
      'active': active,
      'ending': ending
    }
  );

  return (
    <div className={classes}>
      {score > 0 ? '+' + score : score}
    </div>
  );
};

ActiveRoundScoreView.propTypes = propTypes;

export default ActiveRoundScoreView;
