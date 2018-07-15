import React, {PropTypes} from 'react';
import ScoreListRow from './ScoreListRow';

const ScoreList = ({scores}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Score</th>
        <th>Course</th>
      </tr>
      </thead>
      <tbody>
      {scores.map(score =>
        <ScoreListRow key={score.id} score={score}/>
      )}
      </tbody>
    </table>
  );
};

ScoreList.propTypes = {
  scores: PropTypes.array.isRequired
};

export default ScoreList;
