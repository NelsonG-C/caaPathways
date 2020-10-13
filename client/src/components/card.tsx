import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import logo from "../logo.svg";

export const CardItem = (props: any) => {
  console.log("Props here", props);
  return (
    <Card className="cardItem">
      <Card.Img src={logo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          praesentium qui tempora quisquam modi autem facere error, aut quos
          fugiat nesciunt at eius fugit dolores corporis atque, explicabo
          voluptates debitis!
        </Card.Text>
        <Row>
          <Button className="ml-3">Favourite</Button>
          <Button className="ml-auto mr-3">Details</Button>
        </Row>
      </Card.Body>
    </Card>
  );
};
