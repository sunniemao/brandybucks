import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentList: [],
      studentPhoto: '',
      searchInput: ''
    };

    //binding all the method to this context before pass down to components.
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
  };

  //create handler method to extract search input box value
  handleChangeSearch (e) {
    this.setState({
      searchInput: e.target.value
    });
    console.log(this.state.searchInput)
  };

  //create handler method for search button clicked
  searchClicked (e) {
    console.log(this.state.searchInput)
  }





  render () {
    return (
      <div>
        <Nav searchText={this.handleChangeSearch} searchClicked={this.searchClicked} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));