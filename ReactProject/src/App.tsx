import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Button type="button" className="btn btn-info">
        Click for bears
      </Button>
    </>
  );
}

export default App;
