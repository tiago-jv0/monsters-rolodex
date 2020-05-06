import React, { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({
      [input.name]: input.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters =
      searchField !== ''
        ? monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        : monsters;

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox searchField={searchField} onChange={this.handleChange}></SearchBox>
        <ErrorBoundary>
          <CardList cards={filteredMonsters}></CardList>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
