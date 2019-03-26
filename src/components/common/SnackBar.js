import React, { Component } from 'react'
import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

class SnackBarComponent extends Component {
  render() {
    const {
      isSnackBarOpen,
      toggleSnackBar,
      apiMessage: { message }
    } = this.props

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isSnackBarOpen}
        autoHideDuration={3000}
        onClose={() => toggleSnackBar(false)}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => toggleSnackBar(false)}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    )
  }
}

export default SnackBarComponent