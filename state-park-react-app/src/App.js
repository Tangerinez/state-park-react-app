import React from "react";
import Axios from "axios";
import ParkSearch from "./components/ParkSearch";
import Alabama from "./components/Alabama";
import ParkInfo from "./components/ParkInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
      currentPark: [],
      filter: [],
      clicked: false
    };
    this.getSinglePark = this.getSinglePark.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
    this.filterParks = this.filterParks.bind(this);
  }
  componentDidMount() {
    this.getAlabamaStateParks();
  }
  // Function that gets all park data from the database
  getAlabamaStateParks() {
    Axios.get("/parks").then(res => {
      this.setState({
        parkData: res.data,
        filter: res.data
      });
    });
  }
  // Function that gets data for one park from the database, callback used to make sure the props are not one click behind
  getSinglePark(id) {
    Axios.get(`/parks/${id}`).then(res => {
      this.setState(
        {
          currentPark: res.data,
          clicked: true
        },
        () => console.log("one park", this.state.currentPark)
      );
    });
  }
  // Function to make the info div disappear on map click
  handleOffClick() {
    this.setState({
      clicked: false
    });
  }
  // Function to filter the data and return markers that match the name in the search bar
  filterParks(parkFilter) {
    let filteredParks = this.state.parkData;
    filteredParks = filteredParks.filter(park => {
      let parkName = park.name.toLowerCase();
      return parkName.indexOf(parkFilter.toLowerCase()) !== -1;
    });
    this.setState({
      filter: filteredParks
    });
  }
  // Function to filter the data and return markers that match the activities in the search bar
  render() {
    return (
      <div>
        <ParkSearch filter={this.state.filter} onChange={this.filterParks} />
        <Alabama
          parkData={this.state.parkData}
          getOnePark={this.getSinglePark}
          handleOffClick={this.handleOffClick}
          filter={this.state.filter}
        />
        <ParkInfo
          clicked={this.state.clicked}
          currentPark={this.state.currentPark}
        />
      </div>
    );
  }
}

export default App;
