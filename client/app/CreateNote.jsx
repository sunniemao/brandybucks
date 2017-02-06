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
      log: ["Meeting Notes: ", "Action Items: "],
      other: new Date().toLocaleString().split(',')[0],
      types: 2
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

  handleDate(e) {
    this.setState({
      other: e.target.value,
    });
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
    var state = this.state.log;
    state[0] = e.target.value;
    this.setState({
      log: state,
    });
  },


  handleLog2(e) {
    var state = this.state.log;
    state[1] = e.target.value;
    this.setState({
      log: state,
    });
  },

  submitClick(e) {
    e.preventDefault();
    var state = this.state.log;
    state[0] = 'Meeting Notes: ' + state[0];
    state[1] = 'Action Items: ' + state[1];
    state = state.join('^');
    let log = {
      other: this.state.other,
      id: this.state.id,
      author: this.state.author,
      log: state,
      types: this.state.types
    }
    console.log(log);
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
      <div id="wrapper">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
      <div className="formWidth">
      <h1>Add Meeting Notes</h1>
      <form onSubmit={this.submitClick}>
        <div className="form-group">
        <label>
        Date of Meeting:
        </label>
        <input type="text" className="form-control" onChange={this.handledate} placeholder={this.state.other} />
        </div>
        <div className="form-group">
        <label>
        IEP Team Members Present:
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
        Meeting Notes:
        </label>
        <textarea type="text" className="form-control" onChange={this.handleLog}/>
        </div>
        <div className="form-group">
        <label>
        Action Items:
        </label>
        <textarea type="text" className="form-control" onChange={this.handleLog2}/>
        </div>
        <div className="form-group">
        <button className="btn search-btn">Add meeting notes</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
})