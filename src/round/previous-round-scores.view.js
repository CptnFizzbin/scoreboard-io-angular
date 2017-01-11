import React from 'react';

import './previous-round-scores.scss';

const PreviousRoundScoresView = ({roundScores}) => {
  let scores = roundScores.map((score, index) => {
    return (
      <span key={index} className="round-score">
        {score >= 1 ? '+' + score : score}
      </span>
    )
  });

  return (
    <div className="prev-round-scores">
      {scores}
    </div>
  )

};

export default PreviousRoundScoresView;
