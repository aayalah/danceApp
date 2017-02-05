import React from 'react'

export default React.createClass({
  getInitialState: function() {
   return {display: false};
  },
  displayComments(e) {
    this.setState({display: !this.state.display})
  },
  videoClicked() {
    this.props.videoClicked(this.props.video);
  },
  render() {
    return <div onClick={this.videoClicked} className="postContainer">
              <video className="smallVideo" src={this.props.video.uri}></video>
              <hr/>
              <h6> {this.props.video.title} </h6>
          </div>;
  }
})


/*<hr/>
<p>
Description
</p>
<hr/>
<div className="col"><i className="glyphicon glyphicon-comment"/><span onClick={this.displayComments} className="link">Comment</span></div>
<div className="col"><i className="fa fa-thumbs-o-up"/><span className="link"> Like</span></div>
<hr/>
<Message display ={this.state.display}/>*/
