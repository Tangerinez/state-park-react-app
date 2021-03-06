import React from "react";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import SearchBar from "./SearchBar/SearchBar";
import data from "./data";
import "./MapContainer.css";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      parks: data
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  // This function was supposed to zoom in on a particular marker at the state park's location //
  zoomInOnMap(stateParkName) {
    for (var i = 0; i < data.length; i++) {
      if (stateParkName === data[i].name) {
        return (
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: data[i].latitude, lng: data[i].longitude }}
          />
        );
      }
    }
  }
  // Capture's user's input and creates a filtered list
  handleSearchInput(searchInput) {
    document.getElementById("myUL").innerHTML = "";
    let filteredParks = [];
    let domList = document.getElementById("myUL");
    for (var i = 0; i < data.length; i++) {
      const parkName = data[i].name;
      if (parkName.toLowerCase().includes(searchInput.toLowerCase()) === true) {
        filteredParks.push(parkName);

        let addListItem = document.createElement("li");
        addListItem.setAttribute("id", "park" + i);
        addListItem.appendChild(document.createTextNode(parkName));
        addListItem.addEventListener("click", this.zoomInOnMap(parkName));
        domList.appendChild(addListItem);
      }
    }

    this.setState({ parks: filteredParks });
  }
  // Changes state so that marker window pops up
  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  // Changes state so that marker window disappears
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
  // Changes state so that marker window disappears
  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };
  // This function was supposed to make generating the Markers more dry, instead of having to create a Marker individually for every state park
  /*
  generateMarkers() {
    this.state.parks.map(park => (
      <Marker
        name={park[0].name}
        address={park[1].address}
        hours={park[2].hours}
        onClick={this.onMarkerClick}
        position={{ lat: park[3].latitude, lng: park[4].longitude }}
      />
    ));
  }
  */
  render() {
    return (
      <div className="component-container">
        <SearchBar handleSearchInput={this.handleSearchInput} />
        <div className="matches-title">Matching State Parks</div>
        <div className="instruction-container">
          <h1 className="instruction-title">Instructions</h1>
          <ol className="instructions">
            <li>
              Type a search query into the search bar to see existing state
              parks in Alabama
            </li>
            <li>
              Markers are clickable and will display information about the state
              park
            </li>
            <li>
              Clicking on a filtered search item will zoom directly to that
              marker on the map (not functional yet)
            </li>
          </ol>
        </div>
        <ul id="myUL" />

        <Map
          google={this.props.google}
          zoom={7.5}
          style={mapStyles}
          initialCenter={{ lat: 32.3182, lng: -86.9023 }}
        >
          <Marker
            name={data[0].name}
            address={data[0].address}
            hours={data[0].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[0].latitude, lng: data[0].longitude }}
          />
          <Marker
            name={data[1].name}
            address={data[1].address}
            hours={data[1].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[1].latitude, lng: data[1].longitude }}
          />
          <Marker
            name={data[2].name}
            address={data[2].address}
            hours={data[2].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[2].latitude, lng: data[1].longitude }}
          />
          <Marker
            name={data[3].name}
            address={data[3].address}
            hours={data[3].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[3].latitude, lng: data[3].longitude }}
          />
          <Marker
            name={data[4].name}
            address={data[4].address}
            hours={data[4].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[4].latitude, lng: data[4].longitude }}
          />
          <Marker
            name={data[5].name}
            address={data[5].address}
            hours={data[5].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[5].latitude, lng: data[5].longitude }}
          />
          <Marker
            name={data[6].name}
            address={data[6].address}
            hours={data[6].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[6].latitude, lng: data[6].longitude }}
          />
          <Marker
            name={data[7].name}
            address={data[7].address}
            hours={data[7].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[7].latitude, lng: data[7].longitude }}
          />
          <Marker
            name={data[8].name}
            address={data[8].address}
            hours={data[8].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[8].latitude, lng: data[8].longitude }}
          />
          <Marker
            name={data[9].name}
            address={data[9].address}
            hours={data[9].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[9].latitude, lng: data[9].longitude }}
          />
          <Marker
            name={data[10].name}
            address={data[10].address}
            hours={data[10].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[10].latitude, lng: data[10].longitude }}
          />
          <Marker
            name={data[11].name}
            address={data[11].address}
            hours={data[11].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[11].latitude, lng: data[11].longitude }}
          />
          <Marker
            name={data[12].name}
            address={data[12].address}
            hours={data[12].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[12].latitude, lng: data[12].longitude }}
          />
          <Marker
            name={data[13].name}
            address={data[13].address}
            hours={data[13].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[13].latitude, lng: data[13].longitude }}
          />
          <Marker
            name={data[14].name}
            address={data[14].address}
            hours={data[14].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[14].latitude, lng: data[14].longitude }}
          />
          <Marker
            name={data[15].name}
            address={data[15].address}
            hours={data[15].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[15].latitude, lng: data[15].longitude }}
          />
          <Marker
            name={data[16].name}
            address={data[16].address}
            hours={data[16].hours}
            onClick={this.onMarkerClick}
            position={{ lat: data[16].latitude, lng: data[16].longitude }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div className="info-window">
              <h2>{this.state.selectedPlace.name}</h2>
              <h4>Address: {this.state.selectedPlace.address}</h4>
              <h4>Hours: {this.state.selectedPlace.hours}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDAonE5_rSGeAO4ZQkudybmgAhhNylh7pc"
})(MapContainer);
