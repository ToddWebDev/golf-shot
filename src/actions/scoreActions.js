import * as types from './actionTypes';
import scoreApi from '../api/mockScoreApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadScoresSuccess(scores) {
  return { type: types.LOAD_SCORES_SUCCESS, scores: scores };
}

export function loadScores() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return scoreApi.getAllScores().then(scores => {
      dispatch(loadScoresSuccess(scores));
    }).catch(error => {
      throw(error);
    });
  };
}