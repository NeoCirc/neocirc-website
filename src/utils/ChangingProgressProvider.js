import React from "react";

class ChangingProgressProvider extends React.Component {
  interval = undefined;
  static defaultProps = {
    interval: 25
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.valuesIndex < this.props.values.length - 1) {
        this.setState({
          valuesIndex: (this.state.valuesIndex + 1)
        });
      } else {
        clearInterval(this.interval);
      }
    }, this.props.interval);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
