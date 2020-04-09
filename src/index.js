import React            from 'react';
// import Amplify          from 'aws-amplify';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
import { PersistGate }  from 'redux-persist/integration/react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

import Router               from './Router';
import { store, persistor } from './redux/config';
import * as serviceWorker   from './serviceWorker';

import theme from './theme';
import './index.css';

const App = (props) => {

  const muiTheme = createMuiTheme(theme);

  return (
    <Provider store={store}>
      <PersistGate
        loading={ <CircularProgress size={150} /> }
        persistor={persistor}>

        <MuiThemeProvider theme={muiTheme}>
          <Router />
        </MuiThemeProvider>

      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
