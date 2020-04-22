import { combineReducers } from 'redux';
// Import reducers here
import snackbar from './snackbar';
import weather from './weather';

const rootReducer = combineReducers({
	snackbar,
	weather,
});

export default rootReducer;
