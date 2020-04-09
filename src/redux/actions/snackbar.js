import {
  SET_SNACKBAR
} from '../reducers/snackbar';

export function setSnackbar(payload) {
  return {
    type: SET_SNACKBAR,
    payload: {
      message: payload
    }
  }
}