import React, {Component} from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  Popover,
} from 'material-ui';

import PlayerSelect from '../player/player-select';
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
    console.log(selectedId);

    this.setState({
      selectedPlayerId: selectedId,
    })
  }

  onEditScore(e) {
    this.setState({
      showPopover: true,
      anchorEl: e.currentTarget,
      selectedScore: {value: 6}
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
      <Table className="scores-table" selectable={false}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Round</TableHeaderColumn>
            <TableHeaderColumn>Score</TableHeaderColumn>
            <TableHeaderColumn>Total</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn >
              <div className='score-value' onClick={this.onEditScore}>
                +6
              </div>
            </TableRowColumn>
            <TableRowColumn>4</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

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
