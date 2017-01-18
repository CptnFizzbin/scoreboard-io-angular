import React, {Component} from 'react';
import {
  Paper,
  SelectField,
  MenuItem,
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
  IconButton,
  Popover,
  FlatButton,
} from 'material-ui';

import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import AddCircleOutlineIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutlineIcon from 'material-ui/svg-icons/content/remove-circle-outline';

import './score-history-page.scss';

class ScoreHistoryPageView extends Component {
  constructor (props) {
    super(props);

    this.onEditScore = this.onEditScore.bind(this);
    this.onDoneEditScores = this.onDoneEditScores.bind(this);

    this.state = {
      showPopover: false,
      anchorEl: null
    }
  }

  onEditScore(e) {
    console.log('ping');

    this.setState({
      showPopover: true,
      anchorEl: e.currentTarget.parentElement
    })
  }

  onDoneEditScores() {
    console.log('pong');

    this.setState({
      showPopover: false
    });
  }

  render = () => (
    <div className="score-history-page">
      <div className="player-select-area">
        <SelectField
          fullWidth={true}
          floatingLabelText="Player"
          value={1}
        >
          <MenuItem value={1} primaryText="Stephen"/>
          <MenuItem value={2} primaryText="Stephen"/>
          <MenuItem value={3} primaryText="Stephen"/>
          <MenuItem value={4} primaryText="Stephen"/>
          <MenuItem value={5} primaryText="Stephen"/>
          <MenuItem value={6} primaryText="Stephen"/>
          <MenuItem value={7} primaryText="Stephen"/>
          <MenuItem value={8} primaryText="Stephen"/>
          <MenuItem value={9} primaryText="Stephen"/>
        </SelectField>
      </div>
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
            <TableRowColumn>
                <span className="score-value">
                  -6
                </span>
              <IconButton
                onClick={this.onEditScore}
                style={{height: 48, width: 48}}
                iconStyle={{height: 16, width: 16}}
              >
                <ModeEditIcon  />
              </IconButton>
            </TableRowColumn>
            <TableRowColumn>4</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>
                <span className="score-value">
                  -6
                </span>
              <IconButton
                onClick={this.onEditScore}
                style={{height: 48, width: 48}}
                iconStyle={{height: 16, width: 16}}
              >
                <ModeEditIcon  />
              </IconButton>
            </TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>
                <span className="score-value">
                  -6
                </span>
                <IconButton
                  onClick={this.onEditScore}
                  style={{height: 48, width: 48}}
                  iconStyle={{height: 16, width: 16}}
                >
                  <ModeEditIcon  />
                </IconButton>
            </TableRowColumn>
            <TableRowColumn>8</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>
              <span className="score-value">
                -6
              </span>
              <IconButton
                onClick={this.onEditScore}
                style={{height: 48, width: 48}}
                iconStyle={{height: 16, width: 16}}
              >
                <ModeEditIcon  />
              </IconButton>
            </TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      <Popover
        style={{padding: '8px'}}
        open={this.state.showPopover}
        anchorEl={this.state.anchorEl}
        onRequestClose={this.onDoneEditScores}
        anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
        targetOrigin={{horizontal: 'middle', vertical: 'center'}}
        autoCloseWhenOffScreen={false}
      >
        <IconButton>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <span>+6</span>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
      </Popover>
    </div>
  );
}

export default ScoreHistoryPageView;
