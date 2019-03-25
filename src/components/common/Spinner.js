import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

class LoaderSpinner extends Component {
  render() {
    const {
      type = 'Puff',
      color = '#1d5358',
      width = '110',
      height = '110'
    } = this.props

    return (
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
      />
    )
  }
}

export default LoaderSpinner