import React from "react";

export class ParkButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-default stateParkButton"
        onClick={this.props.handleClick}
      >
        <div className="click-here-text">Click Here!</div>
        {this.props.label}
      </button>
    );
  }
}
