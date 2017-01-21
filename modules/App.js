import React from 'react'
import HeaderComponent from './HeaderComponents/Header'
export default React.createClass({
  render() {
    return (
      <div className="app">
      <HeaderComponent/>
      {this.props.children}
      </div>
    )
  }
})
