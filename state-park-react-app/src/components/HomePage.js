import React from "react";
import { FindParkButton } from "./components/findParkButton";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="opening-title">Welcome to State Park Finder!</div>
          <FindParkButton />
          <p />
          Find a state park!
        </header>
      </div>
    );
  }
}
