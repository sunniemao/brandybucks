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
      <form onSubmit={this.submitClick}>
        <label>
        First Name:
        <input type="text" onChange={this.handleFirstName} />
        </label>
        <label>
        Last Name:
        <input type="text" onChange={this.handleLastName} />
        </label>
        <label>
        Grade:
        <input type="text" onChange={this.handleGrade} />
        </label>
        <label>
        IEP:
        <input type="text" onChange={this.handleIEP} />
        </label>
        <label>
        Picture:
        <input type="text" onChange={this.handlePic} />
        </label>
        <button className="btn add-btn">Add a student</button>
      </form>
    )
  }
}

export {StudentForm}