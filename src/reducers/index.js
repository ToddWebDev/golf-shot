import { combineReducers } from 'redux';
import courses from './courseReducer';
import scores from './scoreReducer';

const rootReducer = combineReducers({
  //Impacts access to state throughout app
  //i.e. state.courseReducer doesn't read as well
  courses: courses,
  scores: scores
});

export default rootReducer;