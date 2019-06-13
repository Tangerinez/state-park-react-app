import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   filtered: []
    // };

    this.state = {
      searchInput: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchInput: event.currentTarget.value
    });

    this.props.handleSearchInput(event.currentTarget.value);
  }

  render() {
    return (
      <div className="searchBar">
        <div className="app-title">Alabama State Park Searcher!</div>
        <input
          type="text"
          className="input"
          value={this.state.searchInput}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <div />
      </div>
    );
  }
}

export default SearchBar;
