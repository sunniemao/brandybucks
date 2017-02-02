import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {signup} from './helper/auth.js';
 
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
   signup(user)
     .then(function(resp) {
     console.log('account created');
     })
     .catch(function(err) {
       console.log('could not create account', err);
     })
 },

  render: function() {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                  <h1>Sign Up</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <form onSubmit={this.submitClick} method="post">
                  <b>Username:</b> &nbsp;
                  <input id="username" type="text" name="username" value={this.state.name} onChange={this.handleInputChange} /> &nbsp;
                  <b>Password:</b> &nbsp;
                  <input id="password" type="password" name="password" value={this.state.name} onChange={this.handleInputChange} /> &nbsp;
                  <input type="submit" className="btn login-btn" value="&nbsp;Sign Up&nbsp;" />
            </form>
            <p />
              <Link to="/login">Already have an account? Login &rarr;</Link>
            <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
})