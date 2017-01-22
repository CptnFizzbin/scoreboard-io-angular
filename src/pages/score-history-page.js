import {connect} from 'react-redux';

import ScoreHistoryPageView from './score-history-page.view';
import {setRoundScore} from "../score/score.actions";

const propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDoneScoreEdit: (changedScore) => {
      console.log(changedScore);
      dispatch(setRoundScore(
        changedScore.playerId,
        changedScore.round,
        changedScore.value
      ));
    }
  };
};

const ScoreHistoryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreHistoryPageView);

ScoreHistoryPage.propTypes = propTypes;

export default ScoreHistoryPage;
