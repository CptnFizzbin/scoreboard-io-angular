import {connect} from "react-redux";

import SummeryView from './summery.view';

const ownPropsTypes = {};

const mapStateToProps = (state, ownProps) => {
  let sortedScores = [...state.scores]
    .map(scores => scores.value)
    .sort((a, b) => { return b - a; })
    .filter((v, i, a) => a.indexOf(v) === i);

  let playersById = [...state.players]
    .reduce((players, player) => {
      players[player.id] = player;

      return players;
    }, {});

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

  console.log(placements);

  return {
    round: state.round.roundNumber,
    placements: placements
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

const SbioSummery = connect(
  mapStateToProps,
  mapDispatchToProps
)(SummeryView);

SbioSummery.propTypes = ownPropsTypes;

export default SbioSummery;
