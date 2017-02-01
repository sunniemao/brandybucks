import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">brandybucks</Link>
            <ul className="navbar-nav nav-fill">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Create Log</a>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <input className="student-search" type="text" placeholder="Search Name" onChange={this.props.searchText} />
                <button className="btn search-btn" onClick={this.props.searchClicked} >Search Student</button>
              </li>
            </ul>
        </div>
        <div className="side-nav">
          <ul className="side-nav">
            <li>
              <a><img src="https://t1.rbxcdn.com/52ed596ced6630987d05c5cc688e3af5" width="150" /><br /><br />Student Name</a>
            </li>
            <li>
              <a href="index.html">Goals</a>
            </li>
            <li>
              <a href="index.html">IEP</a>
            </li>
            <li>
              <a href="index.html">Meeting Notes</a>
            </li>
            <li>
              <a href="index.html">Updates / Logs</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export {Nav};