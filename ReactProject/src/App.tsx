import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <Header /> <Button> Click for bears </Button>
    </>
  );
}

export default App;
