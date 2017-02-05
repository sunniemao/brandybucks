import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {StudentEntry} from './StudentEntry.jsx';
import {Link} from 'react-router';

class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      clickedStudent: {}
    };

    this.clickedStudent = this.clickedStudent.bind(this);
  }

  //method to retrieve student from database once page load.
  componentWillMount() {
    getAllStudents()
    .then((resp) => {
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  shouldComponentUpdate(nextState) {
    if (this.state.clickedStudent !== nextState) {
      return true;
    }
    return false
  }

  //method to handle click on student
  clickedStudent(e) {
    //console.log("student clicked", e.eachStudent);
    this.setState({
      clickedStudent: e.eachStudent
    });
    console.log("student clicked", this.state.clickedStudent);
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                <h1 className="alignleft">View Students</h1>
                <h3 className="alignright"><Link to="/addstudent"><img src="add.png" height="25px" />Student</Link></h3>
                  <table className="table table-hover table-striped" >
                    <thead>
                      <tr>
                        <th className="col-md-4">Photo</th>
                        <th className="col-md-2">First Name</th>
                        <th className="col-md-2">Last Name</th>
                        <th className="col-md-2">Grade</th>
                        <th className="col-md-2"># Logs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.students.map((student, index) => {
                          return (
                            <StudentEntry clickedStudent={this.clickedStudent} eachStudent={student} key={index} />
                          )
                        })
                      }
                    </tbody>
                  </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {StudentList};