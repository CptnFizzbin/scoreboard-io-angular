import React, {Component, PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutlineIcon from 'material-ui/svg-icons/content/remove-circle-outline';
import debouce from 'javascript-debounce';

import SbioRoundScore from './round-score';

import './player-score.scss';

const ROUND_LENGTH = 6000;
const ROUND_TRANSITION_TIME = 2000;

const propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  score: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  }).isRequired
};

class SbioPlayerScoreView extends Component {
  constructor(props) {
    super(props);

    this.handleScorePlusClick = this.handleScorePlusClick.bind(this);
    this.handleScoreMinusClick = this.handleScoreMinusClick.bind(this);

    this.state = {
      roundScore: 0,
      roundActive: false
    }
  }

  handleScorePlusClick() {
    this.props.onScorePlus();

    this.setState({
      roundScore: this.state.roundScore + 1
    });

    this.startRound();
  }

  handleScoreMinusClick() {
    this.props.onScoreMinus();

    this.setState({
      roundScore: this.state.roundScore - 1
    });

    this.startRound();
  }

  startRound() {
    this.roundStarted();
    this.roundEnding();
    this.roundEnded();
  }

  roundStarted = () => {
    console.log('roundStarted!');

    this.setState({
      roundActive: true
    });
  };

  roundEnding = debouce(() => {
    console.log('roundEnding!');

    this.setState({
      roundActive: false
    });

  }, ROUND_LENGTH - ROUND_TRANSITION_TIME);

  roundEnded = debouce(() => {
    console.log('roundEnded!');
    this.setState({
      roundScore: 0
    })
  }, ROUND_LENGTH);

  render() {
    return (
      <div className="sbio-player-score">
        <span className="player-name">{this.props.player.name}</span>
        <span className="round-score">
          <SbioRoundScore score={this.state.roundScore} active={this.state.roundActive}/>
        </span>
        <span className="score">
          <IconButton onClick={this.handleScorePlusClick}>
            <AddCircleOutlineIcon />
          </IconButton>
          <span className="score-value">{this.props.score.value}</span>
          <IconButton onClick={this.handleScoreMinusClick}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </span>
      </div>
    );
  }
}

SbioPlayerScoreView.propTypes = propTypes;

export default SbioPlayerScoreView;

