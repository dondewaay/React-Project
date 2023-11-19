import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { useState } from "react";
import { Button } from "react-bootstrap";
import BearCard from "./Components/BearCard/BearCard";

function App() {
  return (
    <>
      <Header />
      <Button type="button" className="btn btn-info">
        Click for bears
      </Button>
      <BearCard name="Leonard" image="src/assets/bear.png" desc=":3" />
      <BearCard name="Leonard" image="src/assets/bear.png" desc="evil" />
    </>
  );
}

export default App;
