import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  listItemPressed() {

  },
  getList() {
    return  this.props.data.map((item, key) => <Link key={key} className="itemLink" to={"/info/" + item.title}><div className="listItem" key={item.title}><h1>{item.title}</h1></div></Link>)
  },
  render() {
    return <div className="listContainer">{this.getList()}</div>;
  }
})
