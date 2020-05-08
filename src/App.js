import React, { Component } from 'react';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import { connect } from 'react-redux';

import { setSearchField } from './store/search-field/search-field.actions';

import './App.css';
import { request_robots } from './store/robots/robots-actions';

class App extends Component {
  componentDidMount() {
    const { request_robots } = this.props;

    request_robots();
  }

  handleChange = ({ currentTarget: input }) => {
    const { setSearchField } = this.props;

    setSearchField(input.value);
  };

  render() {
    const { searchField, robots, isPending } = this.props;

    const filteredRobots =
      searchField !== ''
        ? robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()))
        : robots;

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox searchField={searchField} onChange={this.handleChange}></SearchBox>
        <ErrorBoundary>
          <CardList cards={filteredRobots}></CardList>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchField: state.searchField.searchField,
  robots: state.robots.robots,
  isPending: state.robots.isPending,
  error: state.robots.error,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchField: (text) => dispatch(setSearchField(text)),
  request_robots: () => dispatch(request_robots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
