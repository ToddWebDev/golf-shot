import { combineReducers } from 'redux';
import courses from './courseReducer';
import scores from './scoreReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  //Impacts access to state throughout app
  //i.e. state.courseReducer doesn't read as well
  courses: courses,
  scores: scores,
  ajaxCallsInProgress
});

export default rootReducer;