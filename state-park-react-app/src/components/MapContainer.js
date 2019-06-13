import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import SearchBar from "./SearchBar";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: [
        {
          name: "Blue Springs State Park",
          address: "2595 AL-10, Clio, AL 36017",
          hours: "8AM-7PM",
          latitude: 31.661389,
          longitude: -85.5075
        },
        {
          name: "Buck's Pocket State Park",
          address: "393 Co Rd 174, Grove Oak, AL 35975",
          hours: "8AM-5PM",
          latitude: 34.473611,
          longitude: -86.053333
        },
        {
          name: "Cathedral Caverns State Park",
          address: "637 Cave Rd, Woodville, AL 35776",
          hours: "9AM-5:30PM",
          latitude: 34.573333,
          longitude: -86.222222
        },
        {
          name: "Cheaha State Park",
          address: "19644 AL-281, Delta, AL 36258",
          hours: "7AM-6PM",
          latitude: 33.474444,
          longitude: -85.809722
        },
        {
          name: "Chewacla State Park",
          address: "124 Shell Toomer Pkwy, Auburn, AL 36830",
          hours: "8AM-8PM",
          latitude: 32.550833,
          longitude: -85.4775
        },
        {
          name: "DeSoto State Park",
          address: "7104 Desoto Pkwy NE, Fort Payne, AL 35967",
          hours: "9AM-9PM",
          latitude: 34.548333,
          longitude: -85.59
        },
        {
          name: "Frank Jackson State Park",
          address: "100 Jerry Adams Dr, Opp, AL 36467",
          hours: "7AM-9PM",
          latitude: 31.314167,
          longitude: -86.272222
        },
        {
          name: "Gulf State Park",
          address: "20115 AL-135, Gulf Shores, AL 36542",
          hours: "24 hours",
          latitude: 30.265278,
          longitude: -87.641111
        },
        {
          name: "Joe Wheeler State Park",
          address: "4403 McLean Dr, Rogersville, AL 35652",
          hours: "24 hours",
          latitude: 34.791111,
          longitude: -87.379167
        },
        {
          name: "Lake Guntersville State Park",
          address: "1155 Lodge Dr, Guntersville, AL 35976",
          hours: "24 hours",
          latitude: 34.402778,
          longitude: -86.196389
        },
        {
          name: "Lake Lurleen State Park",
          address: "13226 Lake Lurleen Rd, Coker, AL 35452",
          hours: "24 hours",
          latitude: 33.298611,
          longitude: -87.677778
        },
        {
          name: "Lakepoint State Park",
          address: "104 Old Hwy 165, Eufaula, AL 36027",
          hours: "8AM-4:30PM",
          latitude: 31.990833,
          longitude: -85.115
        },
        {
          name: "Meaher State Park",
          address: "5200 Battleship Pkwy, Spanish Fort, AL 36527",
          hours: "24 hours",
          latitude: 30.66973,
          longitude: -87.93604
        },
        {
          name: "Monte Sano State Park",
          address: "5105 Nolen Ave SE, Huntsville, AL 35801",
          hours: "7AM-6PM",
          latitude: 34.731389,
          longitude: -86.504167
        },
        {
          name: "Oak Mountain State Park",
          address: "200 Terrace Dr, Pelham, AL 35124",
          hours: "7AM-7PM",
          latitude: 33.342778,
          longitude: -86.721111
        },
        {
          name: "Rickwood Caverns State Park",
          address: "370 Rickwood Park Rd, Warrior, AL 35180",
          hours: "8AM-5PM",
          latitude: 33.8825,
          longitude: -86.8625
        },
        {
          name: "Wind Creek State Park",
          address: "4325 AL-128, Alexander City, AL 35010",
          hours: "7AM-12AM",
          latitude: 32.863056,
          longitude: -85.933889
        }
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

  handleSearchInput(searchInput) {
    console.log("searching for:", searchInput);
    // INCLUDE LOGIC HERE
  }

  render() {
    return (
      <div>
        <SearchBar handleSearchInput={this.handleSearchInput} />
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
