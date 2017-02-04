import React from 'react'
import DanceInfoComponent from './DanceInfoComponent.js'
import ModalContainer from './DanceInfoModal.js'
import {videos} from '../../data.js'
import {getVideos} from '../../api/login'


export default React.createClass({
  getInitialState() {
    return {displayModal: false, video: undefined, videos: []};
  },
  onComponentDidMount(){
    var comp = this;
    getVideos(localStorage.getItem("user"), localStorage.getItem("password")).then(function(response){
      return response.json();
    }).then(function(responseData){
      return responseData;
    }).then(function(data){
      comp.setState({videos: data});
    });
  },
  onVideoClick(index) {
    this.setState({displayModal: true, video: index})
  },
  getList() {
    return this.state.videos.map((item,key) => <DanceInfoComponent onClick={this.onVideoClick} key={key}/>)
  },
  render() {
    return <div className="mainContainers">
            <button className="addVideo" type="submit"> Add Video </button>
            <ModalContainer video={videos[this.state.video]} display = {this.state.displayModal}/>
            <div>
              {this.getList()}
              </div>
            </div>;
  }
})
