import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  listItemPressed() {

  },
  getList() {
    return  this.props.data.map((item) => <Link className="itemLink" to={"/info/" + item.name}><div className="listItem" key={item.name}><h1>Title</h1><h4>Location Date</h4><h4>Group</h4><p>Description</p></div></Link>)
  },
  render() {
    return <div className="listContainer">{this.getList()}</div>;
  }
})
