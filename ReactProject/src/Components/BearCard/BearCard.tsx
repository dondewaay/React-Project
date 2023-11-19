import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface props {
  name: string;
  image: string;
  desc: string;
}

const BearCard = ({ name, image, desc }: props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Bear Info</Button>
      </Card.Body>
    </Card>
  );
};

export default BearCard;
