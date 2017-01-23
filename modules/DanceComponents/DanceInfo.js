import React from 'react'
import DanceInfoComponent from './DanceInfoComponent.js'
import {videos} from '../../data.js'

export default React.createClass({
  getList() {
    return videos.map((item,key) => <DanceInfoComponent key={key}/>)
  },
  render() {
    return <div className="mainContainers">
            <div>
              {this.getList()}
              </div>
            </div>;
  }
})
