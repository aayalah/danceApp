import React from 'react'

export default React.createClass({
  render() {
    return <div>
            <div>
            <h4>
            {this.props.message.user.username}
            </h4>
            <p>
            {this.props.message.text}
            </p>
            <span>{this.props.message.createdAt}</span>
            </div>
            <hr/>
            </div>
            ;
  }
})
