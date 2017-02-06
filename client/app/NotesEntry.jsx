import React from 'react';

class NotesEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var log = this.props.eachLog.log.split('^');
    var meetingNotes = log[0];
    var actionItems = log[1];
    return (
      <tr>
        <td>{this.props.eachLog.other}</td>
        <td>{this.props.eachLog.first_name} {this.props.eachLog.last_name}</td>
        <td>{this.props.eachLog.user}</td>
        <td>{meetingNotes} <br /> <br /> {actionItems}</td>
      </tr>
    )
  }
}

export {NotesEntry};