// Dependencies
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setSnackbar } from '../../redux/actions/snackbar';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

// Styles
import styles from './styles';

const Main = props => {
    const { classes } = props;
    const dispatch = useDispatch();

    function runSnackbar(message) {
        dispatch(setSnackbar(message));
    }

    return (
        <div className={classes.root}>
            <h2>Start here</h2>
            <Button onClick={() => runSnackbar("Snackbar clicked")}>
                Click for snackbar
            </Button>
        </div>
    );
}

export default withStyles(styles)(Main);
