export const SET_SNACKBAR = 'SET_SNACKBAR';
export const INIT = { message: '' };

export default function(state = INIT, { type, payload }) {

  let newState = Object.assign({}, state);

  switch(type) {

    case SET_SNACKBAR:
      newState.message = payload.message;

      return newState;

    default:
      return state;
  }
}