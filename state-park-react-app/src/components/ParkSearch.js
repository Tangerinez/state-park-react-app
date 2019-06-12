import React from "react";

class ParkSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      activities: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.baseState = this.state;
  }
  // Handles change in the search form for park names
  handleChange(event) {
    this.setState({
      search: event.target.value,
      activities: ""
    });
    this.props.onChange(event.target.value);
  }
  // Handles reset for the search
  handleBaseState() {
    this.setState(this.baseState);
    this.props.onChange(this.baseState.search);
  }
  render() {
    return (
      <div className="search-form">
        <h2>Search Parks</h2>
        <div className="input-container">
          <label>Park Name: </label>
          <input
            type="text"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={() => this.handleBaseState()} className="btn">
          RESET SEARCH
        </button>
      </div>
    );
  }
}

export default ParkSearch;
