import React, { Component, PropTypes } from 'react'

class Simple extends Component {


  render() {
    console.log('called render !!! within Simple.js')
    const { text } = this.props

    return (
      <div onClick={onClick}>Simple {text}
      </div>
      )
  }
}

Simple.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

Simple.defaultProps = { text:'iamdefaultsimple', onClick: function(){}};

export default Simple

