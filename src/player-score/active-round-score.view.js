import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './active-round-score.scss';

const propTypes = {
  score: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};

class ActiveRoundScoreView extends Component {
  render() {
    let classes = classNames(
      'active-round-score',
      {
        active: this.props.active,
        ending: this.props.ending
      }
    );

    return (
      <div className={classes}>
        {this.props.score > 0 ? '+' + this.props.score : this.props.score}
      </div>
    )
  }
}

ActiveRoundScoreView.propTypes = propTypes;

export default ActiveRoundScoreView;
