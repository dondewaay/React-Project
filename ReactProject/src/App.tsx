import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "./Components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <div className="card-container">
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
      </div>
      <Button onClick={() => console.log("Clicked!")}>ButtonTest</Button>
    </>
  );
}

export default App;
