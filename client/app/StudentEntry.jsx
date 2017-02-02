import React from 'react';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.eachStudent)
    return (
      <div>
        {this.props.eachStudent.pic}&nbsp;
        {this.props.eachStudent.first_name}&nbsp;
        {this.props.eachStudent.last_name}&nbsp;
        {this.props.eachStudent.grade}&nbsp;
        {this.props.eachStudent.IEP}
      </div>
    )
  }
}

export {StudentEntry};