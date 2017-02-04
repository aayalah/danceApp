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
            <div className="modalContainer">
              <form>
                <span>Title: </span><input></input>
                <span>Video:</span><input></input>
                <span>Category:</span><input></input>
                <h4> Description </h4>
                <textarea>
                </textarea>
                <button>Submit</button>
                </form>
              </div>
          </div>
  }
})
