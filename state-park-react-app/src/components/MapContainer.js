import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: [
        { latitude: 31.661389, longitude: -85.5075 },
        { latitude: 34.473611, longitude: -86.053333 },
        { latitude: 34.573333, longitude: -86.222222 },
        { latitude: 33.474444, longitude: -85.809722 },
        { latitude: 32.550833, longitude: -85.4775 },
        { latitude: 34.548333, longitude: -85.59 },
        { latitude: 31.314167, longitude: -86.272222 },
        { latitude: 30.265278, longitude: -87.641111 },
        { latitude: 34.791111, longitude: -87.379167 },
        { latitude: 34.402778, longitude: -86.196389 },
        { latitude: 33.298611, longitude: -87.677778 },
        { latitude: 31.990833, longitude: -85.115 },
        { latitude: 30.66973, longitude: -87.93604 },
        { latitude: 34.731389, longitude: -86.504167 },
        { latitude: 33.342778, longitude: -86.721111 },
        { latitude: 33.8825, longitude: -86.8625 },
        { latitude: 32.863056, longitude: -85.933889 }
      ]
    };
  }

  displayMarkers = () => {
    return this.state.parks.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={(...args) => console.log(...args)}
        />
      );
    });
  };

  handleSearchInput(searchInput) {}

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 32.3182, lng: -86.9023 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDAonE5_rSGeAO4ZQkudybmgAhhNylh7pc"
})(MapContainer);
