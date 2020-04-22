// Dependencies
import React from 'react';
import axios from 'axios';
// React Router
import { useHistory } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { setWeatherData } from '../../redux/actions/weather';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// Styles
import styles from './styles';
// Local
import { API_BASE, API_KEY, CORS_ANYWHERE } from '../../constants';
import grayLogo from '../../assets/gray-logo.svg';

const Main = (props) => {
	const { classes } = props;
	const dispatch = useDispatch();
	const history = useHistory();

	const handleKeyPress = async (e) => {
		if (e.key === 'Enter') {
			const res = await axios.get(
				`${CORS_ANYWHERE}${API_BASE}?zip=${e.target.value}&appid=${API_KEY}`
			);
			dispatch(setWeatherData(res.data));
			history.push('/result');
		}
	};

	return (
		<div className={classes.root}>
			<img src={grayLogo} alt='logo' />
			<Typography component='h1' align='center' className={classes.title}>
				FyreWeather
			</Typography>
			<Typography align='center' className={classes.slogan}>
				Because one weather app, isn’t enough.
			</Typography>
			<input
				type='text'
				placeholder='Enter zipcode'
				className={classes.input}
				onKeyPress={handleKeyPress}
			/>
		</div>
	);
};

export default withStyles(styles)(Main);
