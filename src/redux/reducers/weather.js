export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const INIT = { data: null };

export default function (state = INIT, { type, payload }) {
	let newState = Object.assign({}, state);
	switch (type) {
		case SET_WEATHER_DATA:
			newState.data = payload.data;
			return newState;
		default:
			return state;
	}
}
