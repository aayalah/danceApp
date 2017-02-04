import React from 'react'
import DanceInfoComponent from './DanceInfoComponent.js'
import ModalContainer from './DanceInfoModal.js'
import {videos} from '../../data.js'

export default React.createClass({
  getInitialState() {
    return {displayModal: false, video: undefined, videos: undefined};
  },
  onVideoClick(index) {
    this.setState({displayModal: true, video: index})
  },
  getList() {
    return videos.map((item,key) => <DanceInfoComponent onClick={this.onVideoClick} key={key}/>)
  },
  render() {
    return <div className="mainContainers">
            <ModalContainer video={videos[this.state.video]} display = {this.state.displayModal}/>
            <div>
              {this.getList()}
              </div>
            </div>;
  }
})
