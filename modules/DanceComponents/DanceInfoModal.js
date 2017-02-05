import React from 'react'
import MessageList from '../MessageComponents/MessageList.js'
import {submitComment, getComments} from '../../api/login'
export default React.createClass({
  getInitialState: function() {
    console.log(this.props.display);
   return {display: this.props.display, message: "", comments: []};
  },
  componentDidMount() {
    this.requestComments();
  },
  componentWillReceiveProps(nextProps){
    this.setState({display:nextProps.display});
    this.requestComments();
  },
  modalBackgroundClicked(event) {
    if(event.target.className === "mymodal"){
      this.setState({display: false});
    }

  },
  requestComments() {
    console.log(this.props.video);
    if(this.props.video) {
      //console.log("request");
      var comp = this;
      getComments(localStorage.getItem("user"), localStorage.getItem("password"), this.props.video.id).then(function(response){
        return response.json();
      }).then(function(responseData){
        return responseData;
      }).then(function(data){
        //console.log("inside");
        console.log(data);
        comp.setState({comments: data});
      });


    }

  },
  messageSubmitted(event) {
    var comp = this;
    submitComment(localStorage.getItem("user"), localStorage.getItem("password"), this.props.video.id, this.state.message).then(function(response){
      return response.json();
    }).then(function(responseData){
      return responseData;
    }).then(function(data){
      comp.requestComments();
    });
  },
  messageChanged(event){
    this.setState({message: event.target.value})
  },
  render() {
    //console.log(this.state.display);
    //var classes = "modalContainer";
    //classes += (!this.props.display ? ",hidden" : "");
    var modal = (this.state.display) ? <div onClick={this.modalBackgroundClicked} className="mymodal"><div className="modalContainer">
      <div className="col-1">
      <div>
        <video className="smallVideo" src={this.props.video.uri} controls></video>
      </div>
      <hr/>
      <h3> {this.props.video.title} </h3>
      <p>
      {this.props.video.description}
      </p>
      </div>

      <div className="col-2">
      <h3> {this.props.video.user.username} </h3>
      <h6> Views: {this.props.video.views} </h6>
      <hr/>
      <div className="messageContainer">
      <div className="messageInput">
      <textarea value={this.state.message} onChange={this.messageChanged}></textarea>
      <div>
      <button id="messageSubmitButton" onClick={this.messageSubmitted} type="submit"> Submit</button>
      </div>
      </div>
      <MessageList messages={this.state.comments}/>
      </div>
      </div>
  </div></div> : null;
    return modal
  }
})
//<div className="col"><i className="fa fa-thumbs-o-up"/><span className="link"> Like</span></div>
