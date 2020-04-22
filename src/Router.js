import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from './redux/config';

import Snackbar from './components/Snackbar';
import Main from './containers/Main';
import Result from './containers/Result/Result';

const _Router = (props) => {
	return (
		<React.Fragment>
			<Snackbar />

			<Router history={history}>
				<Switch>
					<Route exact path='/' component={Main} />
					<Route path='/result' component={Result} />
				</Switch>
			</Router>
		</React.Fragment>
	);
};

export default _Router;
