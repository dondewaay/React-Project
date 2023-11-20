import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "./Components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Card
        name="Leonard"
        image="src/assets/bear.png"
        desc=":3"
        butt="Bear Info"
      />
      <Card
        name="Joshua"
        image="src/assets/josh.gif"
        desc="orb"
        butt="Rotate"
      />
    </>
  );
}

export default App;
