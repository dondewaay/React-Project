import Card from "../Components/Card/Card";
import { Button } from "react-bootstrap";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Carousel from "../Components/Carousel/Carousel";
import "./Home.css"

const Home = () => {
  return(
    <>
    <Jumbotron />;
    <Carousel/>
    </>
  )
};

export default Home;
