import React from 'react';
import {Link} from 'react-router';
import {getStudentByName} from './helper/auth.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentList: [],
      studentPhoto: '',
      searchInput: ''
    };

    //binding all the method to this context before pass down to components.
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
  };

    //create handler method to extract search input box value
  handleChangeSearch (e) {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput)
  };

  capitalizeName (name) {
    let fullName = name.split(" ");
    let cappedName = fullName.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
    return cappedName;
  };

  //create handler method for search button clicked
  searchClicked (e) {
    let queryName = this.capitalizeName(this.state.searchInput)
    console.log('search clicked!!')
    getStudentByName(queryName)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((err) => {
      console.log('sorry could not get student');
    })
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
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav navbar-right">
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
                <input className="student-search" type="text" placeholder="&nbsp;Search Student" onChange={this.handleChangeSearch} />&nbsp;
                <button className="btn search-btn" onClick={this.searchClicked} >Find</button>
              </li>
            </ul>
        </div>
        <div className="side-nav">
          <ul className="side-nav">
            <li className="studentInfo">
              <img src="../llama.png" width="150" /><br />Student Name<br />
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