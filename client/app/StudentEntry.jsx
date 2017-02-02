import React from 'react';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.eachStudent)
    return (
      <tr>
        <td><img src=
        {this.props.eachStudent.pic} width="40%" /></td>
        <td>{this.props.eachStudent.first_name}</td>
        <td>{this.props.eachStudent.last_name}</td>
        <td>{this.props.eachStudent.grade}</td>
      </tr>
    )
  }
}

export {StudentEntry};