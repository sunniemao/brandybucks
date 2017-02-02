import React from 'react';
import axios from 'axios';
import {addStudent} from './helper/auth.js';

class StudentForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      grade: '',
      IEP: '',
      pic: ''
    };

    this.handleFirstName = this.handleFirstName.bind(this);

    this.handleLastName = this.handleLastName.bind(this);

    this.handleGrade = this.handleGrade.bind(this);

    this.handleIEP = this.handleIEP.bind(this);

    this.handlePic = this.handlePic.bind(this);

    this.submitClick = this.submitClick.bind(this);
  }

  handleFirstName(e) {
    this.setState({
      first_name: e.target.value,
    });
  }

  handleLastName(e) {
    console.log(e.target.value)
    this.setState({
      last_name: e.target.value,
    });
  }

  handleGrade(e) {
    this.setState({
      grade: e.target.value,
    });
  }

  handleIEP(e) {
    this.setState({
      IEP: e.target.value,
    });
  }

  handlePic(e) {
    this.setState({
      pic: e.target.value,
    });
  }

  submitClick(e) {
    e.preventDefault();
    let student = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      grade: this.state.grade,
      IEP: this.state.IEP,
      pic: this.state.pic
    }
    addStudent(student)
      .then(function(resp) {
      console.log('student added');
      })
      .catch(function(err) {
        console.log('could not add student', err);
      })
  }

  render() {
    return(
      <div className="formWidth">
      <form onSubmit={this.submitClick}>
        <div className="form-group">
        <label>
        First Name:
        </label>
        <input type="text" className="form-control" onChange={this.handleFirstName} />
        </div>
        <div className="form-group">
        <label>
        Last Name:
        </label>
        <input type="text" className="form-control" onChange={this.handleLastName} />
        </div>
        <div className="form-group">
        <label>
        Grade:
        </label>
        <input type="text" className="form-control" onChange={this.handleGrade} />
        </div>
        <div className="form-group">
        <label>
        IEP:
        </label>
        <input type="text" className="form-control" onChange={this.handleIEP} />
        </div>
        <div className="form-group">
        <label>
        Photo:
        </label>
        <input type="text" className="form-control" onChange={this.handlePic} />
        </div>
        <div className="form-group">
        <button className="btn search-btn">Add a student</button>
        </div>
      </form>
      </div>
    )
  }
}

export {StudentForm}