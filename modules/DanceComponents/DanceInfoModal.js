import React from 'react'
import Message from '../MessageComponents/Message.js'
export default React.createClass({
  getInitialState: function() {
   return {display: false};
  },
  displayComments(e) {
    this.setState({display: !this.state.display})
  },
  render() {
    return <div className="modalContainer">
              <div>
              <video className="smallVideo" src="/waltz.mp4" controls>
              </video>
              </div>
              <hr/>
              <p>
              Description
              </p>
              <hr/>
              <div className="col"><i className="glyphicon glyphicon-comment"/><span onClick={this.displayComments} className="link">Comment</span></div>
              <div className="col"><i className="fa fa-thumbs-o-up"/><span className="link"> Like</span></div>
              <hr/>
              <Message display ={this.state.display}/>
          </div>;
  }
})
