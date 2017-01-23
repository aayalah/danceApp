import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  listItemPressed() {

  },
  getList() {
    return  this.props.data.map((item) => <Link className="itemLink" to={"/info/" + item.name}><div className="listItem" key={item.name}><h1>{item.name}</h1></div></Link>)
  },
  render() {
    return <div className="listContainer">{this.getList()}</div>;
  }
})
