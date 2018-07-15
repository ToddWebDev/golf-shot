import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scoreReducer(state = initialState.scores, action) {
  switch(action.type) {
    case types.LOAD_SCORES_SUCCESS:
      return action.scores;
    
    default:
      return state;
  }
}