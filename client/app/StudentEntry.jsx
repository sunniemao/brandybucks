import React from 'react';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.eachStudent)
    return (
      <div>
        <img src=
        {this.props.eachStudent.pic} />
        {this.props.eachStudent.first_name}&nbsp;
        {this.props.eachStudent.last_name}&nbsp;
        {this.props.eachStudent.grade}&nbsp;
        {this.props.eachStudent.IEP}
      </div>
    )
  }
}

export {StudentEntry};