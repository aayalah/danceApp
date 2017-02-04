import React from 'react'
export default React.createClass({
  getList() {
    return videos.map((item,key) => <DanceInfoComponent key={key}/>)
  },
  render() {
    var hidden = (this.props.display) ? "message" : "message_hidden";
    return <div className={hidden}>
            <div>
            <h4>
            First Name Last Name
            </h4>
            <p>
            This is a message
            </p>
            </div>
            <hr/>
            </div>
            ;
  }
})
