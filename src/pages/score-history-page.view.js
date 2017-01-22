import React, {Component} from 'react';
import Popover from 'material-ui/Popover';

import PlayerSelect from '../player/player-select';
import ScoreHistoryList from '../score-history/score-history-list';
import ScoreEditorView from '../score/score-editor.view';

import './score-history-page.scss';

class ScoreHistoryPageView extends Component {
  constructor (props) {
    super(props);

    this.onPlayerSelect = this.onPlayerSelect.bind(this);
    this.onEditScore = this.onEditScore.bind(this);
    this.onScorePlus = this.onScorePlus.bind(this);
    this.onScoreMinus = this.onScoreMinus.bind(this);
    this.onDoneScoreEdit = this.onDoneScoreEdit.bind(this);

    this.state = {
      showPopover: false,
      anchorEl: null,
      selectedScore: null,
      selectedPlayerId: null,
    }
  }

  onPlayerSelect(selectedId) {
    this.setState({
      selectedPlayerId: selectedId,
    })
  }

  onEditScore(e, score) {
    this.setState({
      showPopover: true,
      anchorEl: e.currentTarget,
      selectedScore: score,
    })
  }

  onScorePlus() {
    let score = this.state.selectedScore;

    this.setState({
      selectedScore: {
        ...score,
        value: score.value + 1,
      }
    })
  }

  onScoreMinus() {
    let score = this.state.selectedScore;

    this.setState({
      selectedScore: {
        ...score,
        value: score.value - 1,
      }
    })
  }

  onDoneScoreEdit() {
    this.setState({
      showPopover: false,
    });

    this.props.onDoneScoreEdit(this.state.selectedScore);
  }

  render = () => (
    <div className="score-history-page">
      <PlayerSelect onPlayerSelect={this.onPlayerSelect} selectedId={this.state.selectedPlayerId} />
      <ScoreHistoryList playerId={this.state.selectedPlayerId} onEditScore={this.onEditScore} />

      <Popover
        style={{padding: '8px'}}
        open={this.state.showPopover}
        anchorEl={this.state.anchorEl}
        onRequestClose={this.onDoneScoreEdit}
        anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
        targetOrigin={{horizontal: 'middle', vertical: 'center'}}
        autoCloseWhenOffScreen={false}
      >
        <ScoreEditorView
          onScorePlus={ this.onScorePlus }
          onScoreMinus={ this.onScoreMinus }
          showSign={true}
          score={this.state.selectedScore}
        />
      </Popover>
    </div>
  );
}

export default ScoreHistoryPageView;
