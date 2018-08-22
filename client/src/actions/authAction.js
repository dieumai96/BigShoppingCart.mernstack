import * as types from './../constants/ActionType';
export const SetCurrentUser = (decoded) => {
  return {
    type : types.SET_CURRENT_USER,
    payload : decoded,
  }
} 