const styles = (theme) => ({
	root: {
		width: '100%',
		backgroundImage: 'linear-gradient(180deg, #326CED 0%, #63A6F8 100%)',
		boxSizing: 'border-box',
		padding: '20px 0 0 15px',
	},
	backBtn: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '20px',
		'& img': {
			marginRight: '15px',
		},
		'& p': {
			color: '#FFFFFF',
		},
	},
	city: {
		color: '#FFFFFF',
		fontSize: '36px',
		lineHeight: '43px',
	},
	cards: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

export default styles;
