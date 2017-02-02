import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {StudentEntry} from './StudentEntry.jsx';

class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
      // [
      // {
      //   first_name: 'Johnny',
      //   last_name: 'Kwong',
      //   grade: 'F',
      //   IEP: 'Very bad student',
      //   pic: 'no pics'
      // },
      // {
      //   first_name: 'Isaac',
      //   last_name: 'Yoon',
      //   grade: 'D',
      //   IEP: 'Very lazy student',
      //   pic: 'no pics'
      // }
      // ]
    };
  }

  componentWillMount() {
    getAllStudents()
    .then((resp) => {
      console.log('data returning', resp.data)
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>View Student List</h1>
              <div>
                {this.state.students.map((student, index) => {
                  return (
                    <StudentEntry eachStudent={student} key={index} />
                  )
                })
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              Text
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {StudentList};