import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
