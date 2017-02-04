import React from 'react'
import Message from '../MessageComponents/Message.js'
export default React.createClass({
  getInitialState: function() {
   return {display: true};
  },
  displayComments(e) {
    this.setState({display: !this.state.display})
  },
  render() {
    return <div className="modalContainer">
              <div className="col-1">
              <div>
                <video className="smallVideo" src="/waltz.mp4" controls></video>
              </div>
              <hr/>
              <h3> Title </h3>
              <p>
              Description
              </p>
              </div>

              <div className="col-2">
              <h3> User Name </h3>
              <h6> Views: </h6>
              <hr/>
              <div className="messageContainer">
              <Message display ={this.state.display}/>
              </div>
              </div>
          </div>;
  }
})
//<div className="col"><i className="fa fa-thumbs-o-up"/><span className="link"> Like</span></div>
