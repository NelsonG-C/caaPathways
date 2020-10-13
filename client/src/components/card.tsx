import React from "react";
import { Card } from "react-bootstrap";
import logo from "../logo.svg";

export const CardItem = (props: any) => {
  return (
    <Card>
      <Card.Img src={logo} />
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>This is test text</Card.Text>
    </Card>
  );
};
