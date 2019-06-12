import React from "react";

const ParkInfo = props => {
  const { clicked, currentPark } = props;
  return (
    // Conditional render so that park info is only displayed when a 'Marker' is clicked
    // And disappears when the map itself is clicked
    clicked ? (
      <div className="ParkInfo">
        <h2 id="Info-Title">Park Information</h2>
        <div className="park-info-container">
          <h4>Name: </h4>
          <h5>{currentPark[0].name}</h5>
        </div>
        <div className="park-info-container">
          <h4>Address: </h4>
          <h5>{currentPark[0].address}</h5>
        </div>
        <div className="park-info-container">
          <h4>Hours: </h4>
          <h5>{currentPark[0].hours}</h5>
        </div>
      </div>
    ) : (
      <div />
    )
  );
};

export default ParkInfo;
