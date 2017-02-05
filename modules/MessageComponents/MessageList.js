import React from 'react'
import MessageComponent from './MessageComponent'

export default React.createClass({
  getList() {
    return this.props.messages.map((item,key) => <MessageComponent message={item} key={key}/>)
  },
  render() {

    return <div>{this.getList()}</div>;
  }
})
