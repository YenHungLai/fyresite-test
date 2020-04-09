import { combineReducers } from 'redux';

// Import reducers here
import snackbar    from './snackbar';

const rootReducer = combineReducers({
  snackbar,
});

export default rootReducer;
