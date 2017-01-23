import React from 'react'
export default React.createClass({


  render() {
    return <div className="postContainer">
              <div>
              <video className="smallVideo" src="/waltz.mp4" controls>
              </video>
              </div>
              <hr/>
              <p>
              Description
              </p>
              <hr/>
              <div className="col"><i className="glyphicon glyphicon-comment"/><span className="link">Comment</span></div>
              <div className="col"><i className="fa fa-thumbs-o-up"/><span className="link"> Like</span></div>
          </div>;
  }
})
