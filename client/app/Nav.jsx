import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  };
  logout(e) {
    e.preventDefault();
    this.props.logout();
  };
  render () {
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">llama</Link>
            <ul className="navbar-nav nav-fill">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/createlog" className="nav-link">Create Log</Link>
              </li>
              <li className="nav-item">
                <a href="#" onClick={this.logout.bind(this)} className="nav-link">Logout</a>
              </li>
              <li className="nav-item">
                <input className="student-search" type="text" placeholder="&nbsp;Search Student" onChange={this.props.searchText} />&nbsp;
                <button className="btn search-btn" onClick={this.props.searchClicked} >Find</button>
              </li>
            </ul>
        </div>
        <div className="side-nav">
          <ul className="side-nav">
            <li className="studentInfo">
              <img src="../llama.png" width="150" /><br /><br />Student Name
            </li>
            <li>
              <Link to="/goals">Goals</Link>
            </li>
            <li>
              <Link to="/iep">IEP</Link>
            </li>
            <li>
              <Link to="/meetingnotes">Meeting Notes</Link>
            </li>
            <li>
              <Link to="/viewlogs">Updates / Logs</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;