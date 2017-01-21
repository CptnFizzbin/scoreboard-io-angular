import {connect} from 'react-redux';

import ScoreHistoryPageView from './score-history-page.view';

const propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    onDoneScoreEdit: () => {}
  };
};

const ScoreHistoryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreHistoryPageView);

ScoreHistoryPage.propTypes = propTypes;

export default ScoreHistoryPage;
