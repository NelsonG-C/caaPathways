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
        <Card.Text>{props.blurb}</Card.Text>
        <Row>
          <Button className="ml-3">Favourite</Button>
          <Button className="ml-auto mr-3">Details</Button>
        </Row>
      </Card.Body>
    </Card>
  );
};
