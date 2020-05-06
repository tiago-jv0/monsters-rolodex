import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getStateFromDerivedError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <h1>Something went wrong</h1> : children;
  }
}

export default ErrorBoundary;
