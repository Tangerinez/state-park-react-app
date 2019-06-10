import React from "react";
import "./App.css";
import { ParkButton } from "./components/findParkButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="opening-title">Welcome to State Park Finder!</div>
        <ParkButton />
        <p />
        Find a state park!
      </header>
    </div>
  );
}

export default App;
