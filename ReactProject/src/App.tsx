import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bears" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
