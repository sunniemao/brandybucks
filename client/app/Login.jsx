import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {login} from './helper/auth.js';
 
module.exports = React.createClass({
  getInitialState: function() {
    return {
        username: "",
        password: ""
    }  
  },

  handleInputChange: function(e) {
    e.preventDefault();
    var name = e.target.name;
    var state = this.state;
    state[name] = e.target.value;
    this.setState(state);
  },

 submitClick: function(e) {
   e.preventDefault();
   let user = {
     username: this.state.username,
     password: this.state.password
   }
   login(user)
     .then(function(resp) {
     console.log('logged in');
     })
     .catch(function(err) {
       console.log('could not login', err);
     })
 },

  render: function() {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                  <h1>Login</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <form onSubmit={this.submitClick} method="post">
                  <b>Username:</b> &nbsp;
                  <input id="username" type="text" name="username" value={this.state.name} onChange={this.handleInputChange} /> &nbsp;
                  <b>Password:</b> &nbsp;
                  <input id="password" type="password" name="password" value={this.state.name} onChange={this.handleInputChange} /> &nbsp;
                  <input type="submit" className="btn login-btn" value="&nbsp;Login&nbsp;" />
            </form>
            <p />
              <Link to="/signup">Create an Account &rarr;</Link>
            <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
})