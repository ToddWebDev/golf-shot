import React, {PropTypes} from 'react';

const ScoreListRow = ({score}) => {
  return (
    <tr>
      <td>{score.score}</td>
      <td>{score.course}</td>
    </tr>
  );
};

ScoreListRow.propTypes = {
  score: PropTypes.object.isRequired
};

export default ScoreListRow;
