// Dependencies
import React from 'react';
// React router
import { useHistory } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// Styles
import styles from './styles';
// Local
import chevronLeft from '../../assets/chevron-left.svg';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const Result = (props) => {
	const {
		classes,
		data: { city, list },
	} = props;
	const history = useHistory();

	const handleClick = () => {
		history.goBack();
	};

	return (
		<div className={classes.root}>
			<div className={classes.backBtn} onClick={handleClick}>
				<img src={chevronLeft} alt='chevron-left' />
				<Typography>Go back</Typography>
			</div>
			<Typography component='h1' className={classes.city}>
				{city.name}
			</Typography>
			<div className={classes.cards}>
				<WeatherCard data={list.slice(0, 8)} />
				<WeatherCard data={list.slice(9, 17)} />
				<WeatherCard data={list.slice(17, 25)} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	data: state.weather.data,
});

export default connect(mapStateToProps)(withStyles(styles)(Result));
