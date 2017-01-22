import React, {PropTypes} from 'react';
import Table from 'material-ui/Table';
import TableHeader from 'material-ui/Table/TableHeader';
import TableRow from 'material-ui/Table/TableRow';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableBody from 'material-ui/Table/TableBody';
import TableRowColumn from 'material-ui/Table/TableRowColumn';

const propTypes = {
  roundScores: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    round: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired,
  })).isRequired,

  onEditScore: PropTypes.func.isRequired,
};

const ScoreHistoryListView = ({
  roundScores,

  onEditScore,
}) => (
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
      {roundScores.map((score, index) => (
        <TableRow key={index}>
          <TableRowColumn>
            {score.round}
          </TableRowColumn>
          <TableRowColumn >
            <div className='score-value' onClick={(e) => onEditScore(e, score)}>
              {score.value >= 1 ? '+' + score.value : score.value}
            </div>
          </TableRowColumn>
          <TableRowColumn>
            {score.totalScore}
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ScoreHistoryListView.propTypes = propTypes;

export default ScoreHistoryListView;
