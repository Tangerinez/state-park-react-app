import React from "react";
import MapContainer from "./components/MapContainer";
import "./App.css";
// import data from "./data";

class App extends React.Component {
  render() {
    return <MapContainer />;
  }
  /*constructor(props) {
    super(props);

    this.state = {
      showHomePage: true
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange() {
    this.setState({
      showHomePage: false
    });
  }

  render() {
    if (this.state.showHomePage) {
      return <FindParkButton onClick={this.handlePageChange} />;
    }

    return <MapContainer />;
  } */
}

export default App;
