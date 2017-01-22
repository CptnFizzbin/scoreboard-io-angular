import {connect} from 'react-redux';

import ScoreHistoryListView from './score-history-list.view';

const propTypes = {};

const mapStateToProps = (state, ownProps) => {
  let playerScore = state.scores
    .find((score) => score.playerId === ownProps.playerId);
  let roundScores = [];

  if (playerScore) {
    roundScores = [...playerScore.roundScores]
      .map((roundScore) => {
        let totalScore = playerScore.roundScores
          .filter((score) => score.round <= roundScore.round)
          .reduce((totalScore, score) => {
            return totalScore + score.score
          }, 0);

        return {
          ...roundScore,
          totalScore
        }
      });
  }

  return {
    roundScores,
  };
};

const mapDispatchToProps = () => {
  return {
    onEditScore: () => {
    }
  };
};

const ScoreHistoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreHistoryListView);

ScoreHistoryList.propTypes = propTypes;

export default ScoreHistoryList;
