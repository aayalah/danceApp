import React from 'react'
import DanceInfoComponent from './DanceInfoComponent.js'
import ModalContainer from './DanceInfoModal.js'
import DanceVideoUpload from './DanceVideoUpload'
import {videos} from '../../data.js'
import {getVideos} from '../../api/login'


export default React.createClass({
  getInitialState() {
    return {displayModal: false, videoUpload: false,video: undefined, videos: []};
  },
  componentDidMount(){
    console.log("inside");
    var comp = this;
    getVideos(localStorage.getItem("user"), localStorage.getItem("password"), this.props.params.name).then(function(response){
      return response.json();
    }).then(function(responseData){
      return responseData;
    }).then(function(data){
      console.log("inside");
      console.log(data);
      comp.setState({videos: data.videos});
    });
  },
  onVideoClick(item) {
    console.log("videoclicl");
    this.setState({displayModal: true, video: item})
    //console.log(this.state.displayModal);
  },
  getList() {
    return this.state.videos.map((item,key) => <DanceInfoComponent video={item} videoClicked={this.onVideoClick} key={key}/>)
  },
  displayUploadForm(){
    this.setState({videoUpload: true, displayModal:false})
  },
  hideVideoUpload() {
    this.setState({videoUpload: false, displayModal:false})
  },
  render() {
    console.log(this.state.displayModal);
    return <div className="mainContainers">
            <button className="addVideo" type="submit" onClick={this.displayUploadForm}> Add Video </button>
            {this.state.videoUpload ? <DanceVideoUpload callback={this.hideVideoUpload}/> : null}
            {this.state.displayModal ? <ModalContainer video={this.state.video} display = {this.state.displayModal}/> : null}
            <div>
              {this.getList()}
              </div>
            </div>;
  }
})
