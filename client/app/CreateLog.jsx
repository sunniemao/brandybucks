import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {addLog} from './helper/auth.js';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      students: [],
      id: '',
      author: '',
      log: ''
    }  
  },

  componentWillMount() {
    getAllStudents()
    .then((resp) => {
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
  },

  handleAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  },

  handleStudent(e) {
    this.setState({
      id: e.target.value,
    });
  },

  handleLog(e) {
    this.setState({
      log: e.target.value,
    });
  },

  submitClick(e) {
    e.preventDefault();
    let log = {
      id: this.state.student,
      author: this.state.user,
      log: this.state.log
    }
    addLog(log)
      .then(function(resp) {
      console.log('log added');
      })
      .catch(function(err) {
        console.log('could not add log', err);
      });
  },

  render: function() {
    return (
      <div className="formWidth">
      <form onSubmit={this.submitClick}>
        <div className="form-group">
        <label>
        Author:
        </label>
        <input type="text" className="form-control" onChange={this.handleAuthor} required />
        </div>
        <div className="form-group">
        <label>
        Student:
        </label>
        <select className="form-control custom-select" onChange={this.handleStudent} required>
          <option defaultValue>Select Student</option>
          {this.state.students.map((student, index) => {
            return (
              <option value={student.id} key={index}>{student.first_name} {student.last_name}</option>
              )
            })
          }
        </select>
        </div>
        <div className="form-group">
        <label>
        Update / Log:
        </label>
        <input type="text" className="form-control" onChange={this.handleLog} required/>
        </div>
        <div className="form-group">
        <button className="btn search-btn">Add log</button>
        </div>
      </form>
      </div>
    );
  }
})