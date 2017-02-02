import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className="container">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;