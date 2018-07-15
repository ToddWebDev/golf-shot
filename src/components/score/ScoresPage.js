import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as scoreActions from '../../actions/scoreActions';
import { bindActionCreators } from 'redux';
import ScoreList from './ScoreList';

class ScoresPage extends React.Component {
  constructor(props, context) {
    super(props,context);
  }

  scoreRow(score, index) {
    return <div key={index}>{score.score}</div>;
  }

  render() {
    const {scores} = this.props; 
    return (
      <div>
        <h1>Scores</h1>
        <ScoreList scores={scores} />
      </div>
    );
  }
}

ScoresPage.propTypes = {
  scores: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Redux connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    scores: state.scores
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(scoreActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresPage);
