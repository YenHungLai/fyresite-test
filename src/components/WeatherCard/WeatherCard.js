import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent } from '@material-ui/core';
import styles from './styles';
// Local
import InfoWrapper from './InfoWrapper';
import sunny from '../../assets/weather-sunny.png';
import cloudy from '../../assets/weather-partlycloudly.png';
import { WEEK_NAMES, MONTH_NAMES } from '../../constants';

const WeatherCard = (props) => {
	const { classes, data } = props;
	const chartRef = useRef();
	const date = new Date(data[0].dt);
	console.log(data);

	useEffect(() => {
		const chart = new Chart(chartRef.current, {
			type: 'line',
			data: {
				labels: ['8 AM', '11 AM', '12 PM', '2 PM', '5 PM', '8 PM', '11 PM'],
				datasets: [
					{
						backgroundColor: '#FFF5D8',
						data: data.map((entry) => entry.main.temp),
					},
				],
			},
			options: {
				legend: {
					display: false,
				},
				scales: {
					xAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
					yAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
				},
			},
		});
	}, []);

	return (
		<div>
			<Typography className={classes.date} component='h2'>
				{WEEK_NAMES[date.getDay()]}, {MONTH_NAMES[date.getMonth()]} {date.getDate()}
			</Typography>
			<Card className={classes.root}>
				<CardContent>
					<InfoWrapper title='Today' info={data[0]} icon={sunny} />
					<InfoWrapper title='Tonight' info={data[7]} icon={cloudy} />
					<canvas className={classes.canvas} id='chart' ref={chartRef}></canvas>
				</CardContent>
			</Card>
		</div>
	);
};

export default withStyles(styles)(WeatherCard);
