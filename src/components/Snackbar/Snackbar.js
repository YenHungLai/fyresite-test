import React      from 'react';
import { connect } from 'react-redux';

import CloseIcon  from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar   from '@material-ui/core/Snackbar';

import { setSnackbar } from '../../redux/actions/snackbar';

const AUTO_HIDE_TIME = 5 * 1000; // 5 seconds

const StyledSnackbar = (props) => {

  const { message, setSnackbar } = props;

  function handleClose(event, reason) {
    // do not close on click away
    if (reason === 'clickaway') return;
    
    setSnackbar('');
  }

  let open = true;

  if (message === '') open = false;

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={AUTO_HIDE_TIME}
      onClose={handleClose}
      message={
        <span>
          { message }
        </span>
      }
      action={
        <IconButton
          color='inherit'
          aria-label='close snackbar'
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      }
    />
  );
}

const mapStateToProps = ({ snackbar }) => ({ ...snackbar });

export default connect(mapStateToProps, { setSnackbar })(StyledSnackbar);
