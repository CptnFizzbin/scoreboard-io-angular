import {PropTypes} from 'react';
import {connect} from 'react-redux';

import SbioRoundScoreView from './round-score.view';

const ownPropsTypes = {
  score: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {

  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
};

const SbioRoundScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(SbioRoundScoreView);

SbioRoundScore.propTypes = ownPropsTypes;

export default SbioRoundScore;
