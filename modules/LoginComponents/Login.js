import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
  getInitialState() {
    return {uname:"", psw:"", psw2:"", visible:false};
  },
  onUnameChange(event) {
    this.setState({uname:event.target.value});
  },
  onPswdChange(event) {
    this.setState({psw:event.target.value});
  },
  onPswd2Change(event) {
    this.setState({psw2:event.target.value});
  },
  onLogin() {
    //fetch
  },
  onCreateUser(){
    this.setState({visible:true});
  },
  onSubmit(){
    //fetch
    this.setState({visible:false});
  },
  onCancel(){
    this.setState({visible:false});
  },
  render() {

    return (
        <div className="loginContainer">
        <div className="login">

          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" onChange={this.onUnameChange} value={this.state.uname} required/>

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" onChange={this.onPswdChange} value={this.state.psw} required/>
          <div className={(this.state.visible?"visible":"hidden")}>
          <label><b>Re-enter Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw2" onChange={this.onPswd2Change} value={this.state.psw2} required/>
          </div>
          <div>
          <button className={(!this.state.visible?"visible":"hidden")} onClick={this.onLogin} type="submit">Login</button>
          <button className={(!this.state.visible?"visible":"hidden")} onClick={this.onCreateUser} type="submit">New User</button>
          <button className={(this.state.visible?"visible":"hidden")} onClick={this.onSubmit} type="submit">Submit</button>
          <button className={(this.state.visible?"visible":"hidden")} onClick={this.onCancel} type="submit">Cancel</button>
          </div>
        </div>
        </div>
    )
  }
})
