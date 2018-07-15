import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  //Impacts access to state throughout app
  //i.e. state.courseReducer doesn't read as well
  courses: courses
});

export default rootReducer;