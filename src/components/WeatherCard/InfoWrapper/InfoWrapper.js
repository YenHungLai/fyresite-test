import React from 'react';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styles from './styles';
// Local
import Rain from '../../../assets/rain.svg';
import Humid from '../../../assets/humid.svg';
import Wind from '../../../assets/wind.svg';

const InfoWrapper = (props) => {
	const { classes, title, info, icon } = props;
	const { main, weather, rain, wind } = info;

	return (
		<div className={classes.root}>
			<Typography>{title}</Typography>
			<div className={classes.temperature}>
				<img src={icon} alt='weather' />
				<Typography>{weather[0].main}</Typography>
				<Typography>{main.temp}</Typography>
				<Typography>{title === 'Today' ? 'Hi' : 'Lo'}</Typography>
			</div>
			<div className={classes.list}>
				<div className={classes.listItem}>
					<img src={Rain} alt='precipitation' />
					<Typography>Precipitation</Typography>
					<strong>{rain ? rain['3h'] : 0}%</strong>
				</div>
				<div className={classes.listItem}>
					<img src={Humid} alt='humidity' />
					<Typography>Humidity</Typography>
					<strong>{main.humidity}</strong>
				</div>
				<div className={classes.listItem}>
					<img src={Wind} alt='wind' />
					<Typography>Wind</Typography>
					<strong>{wind.speed}</strong>
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(InfoWrapper);
