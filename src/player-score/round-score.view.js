import React, { Component, PropTypes } from 'react';

import './round-score.scss';

const propTypes = {
  score: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};

class SbioRoundScoreView extends Component {
  render() {
    return (
      <div className={'sbio-round-score ' + (this.props.active ? 'active' : '') }>
        {this.props.score > 0 ? '+' + this.props.score : this.props.score}
      </div>
    )
  }
}

SbioRoundScoreView.propTypes = propTypes;

export default SbioRoundScoreView;
