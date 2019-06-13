import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
  }

  render() {
    return (
      <div>
        <input type="text" className="input" placeholder="Search..." />
        <ul>Search Bar is above!</ul>
      </div>
    );
  }
}

export default SearchBar;
