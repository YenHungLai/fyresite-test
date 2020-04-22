import { SET_WEATHER_DATA } from '../reducers/weather';

export function setWeatherData(payload) {
	return {
		type: SET_WEATHER_DATA,
		payload: {
			data: payload,
		},
	};
}
