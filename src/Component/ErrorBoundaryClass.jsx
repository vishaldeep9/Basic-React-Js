import React, { Component } from "react";
class ErrorBoundaryClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  //name matter
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <h1>smething went wrong!</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundaryClass;
