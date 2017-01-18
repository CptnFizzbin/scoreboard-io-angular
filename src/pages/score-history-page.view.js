import React from 'react';
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
} from 'material-ui';

import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';

import './score-history-page.scss';

const ScoreHistoryPageView = () => (
  <div className="score-history-page">
    <Paper className="player-select-area">
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
    </Paper>
    <div>
      <Table selectable={false}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn tooltip="The round number">Round</TableHeaderColumn>
            <TableHeaderColumn tooltip="Points scored in the round">Score</TableHeaderColumn>
            <TableHeaderColumn tooltip="Total at end of the round">Total</TableHeaderColumn>
            <TableHeaderColumn tooltip=""></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>+4</TableRowColumn>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>
              <IconButton tooltip="Edit">
                <ModeEditIcon />
              </IconButton>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>-2</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>
              <IconButton tooltip="Edit">
                <ModeEditIcon />
              </IconButton>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>+6</TableRowColumn>
            <TableRowColumn>8</TableRowColumn>
            <TableRowColumn>
              <IconButton tooltip="Edit">
                <ModeEditIcon />
              </IconButton>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>-3</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>
              <IconButton tooltip="Edit">
                <ModeEditIcon />
              </IconButton>
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
);

export default ScoreHistoryPageView;
