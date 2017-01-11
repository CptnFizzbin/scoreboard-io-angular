import {connect} from "react-redux";

import SummeryView from './summery.view';

const ownPropsTypes = {};

function sortScores(scores) {
  return [...scores]
    .map(scores => scores.value)
    .sort((a, b) => {
      return b - a;
    })
    .filter((v, i, a) => a.indexOf(v) === i);
}

function arrayToMap(items) {
  return [...items]
    .reduce((items, item) => {
      items[item.id] = item;
      return items;
    }, {});
}

const mapStateToProps = (state) => {
  let sortedScores = sortScores(state.scores);
  let playersById = arrayToMap(state.players);
  let placements = [];

  for (let rank = 1; rank <= 3; rank++) {
    let placementScore = sortedScores[rank - 1];

    placements.push({
      rank,
      score: placementScore === undefined ? '\u00A0' : placementScore,
      players: [...state.scores]
        .filter(score => score.value === placementScore)
        .map(score => playersById[score.playerId])
    })
  }

  return {
    round: state.round.roundNumber,
    placements: placements
  }
};

const mapDispatchToProps = () => {
  return {}
};

const Summery = connect(
  mapStateToProps,
  mapDispatchToProps
)(SummeryView);

Summery.propTypes = ownPropsTypes;

export default Summery;
