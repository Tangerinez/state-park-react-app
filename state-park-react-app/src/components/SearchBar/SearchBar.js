import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // Handles the user's click event and changes the state to that value -> props passed to MapContainer.js
  handleChange(event) {
    this.setState({
      searchInput: event.currentTarget.value
    });
    this.props.handleSearchInput(event.currentTarget.value);
  }
  // function to reset the search query and the filtered list
  resetSearch() {
    this.setState({ searchInput: "" });
    document.getElementById("myUL").innerHTML = "";
  }

  render() {
    return (
      <div className="searchBar">
        <div className="below-search">
          <div className="app-title">Alabama State Park Searcher</div>
          <input
            type="text"
            id="input"
            value={this.state.searchInput}
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </div>
        <button onClick={() => this.resetSearch()} className="reset-button">
          RESET SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
