const styles = (theme) => ({
	root: {
		alignItems: 'center',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		width: '100%',
		flexDirection: 'column',
		backgroundImage: 'linear-gradient(180deg, #326CED 0%, #63A6F8 100%)',
	},
	title: {
		color: '#FFFFFF',
		fontSize: '36px',
		fontWeight: 400,
		lineHeight: '43px',
		marginTop: '40px',
	},
	slogan: {
		lineHeight: '19px',
		color: '#214F98',
		margin: '15px 0',
	},
	input: {
		width: '287px',
		height: '62px',
		background: 'white',
		borderRadius: '31px',
		border: '4px solid white',
		padding: '0 10px',
	},
});

export default styles;
