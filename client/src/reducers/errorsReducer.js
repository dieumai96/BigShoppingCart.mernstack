import * as types from './../constants/ActionType';
const initialState = {
}
export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ERROR:
      return action.payload
    default:
      return state;
  }
}