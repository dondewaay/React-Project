import "./Card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

interface props {
  name: string;
  image: string;
  desc: string;
  butt: string;
}

const BearCard = ({ name, image, desc, butt}: props) => {
  return (
    <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button onClick={() => console.log("Clicked!")} variant="primary"> {butt} </Button>
      </Card.Body>
    </Card>
  );
};

export default BearCard;
