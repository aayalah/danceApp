import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
  render() {
    return (
      <div className="loginContainer">
        <div className="login">
        <div className="inputContainer"><div className="label">User Name:</div> <input></input></div>
        <div className="inputContainer"><div className="label"> Password: </div> <input></input></div>
        <div>
        <Link to="/list"><button> Login</button></Link>
        </div>
        </div>
      </div>
    )
  }
})
