import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

//types
import { CardProps } from "../types";

export const CardItem = (props: CardProps) => {
  const { id, url, title, blurb } = props;
  return (
    <Card className="cardItem">
      <Link className="card-link" to={`${url}/${id}`}>
        <Card.Img src={logo} />
      </Link>
      <Card.Body>
        <Link className="card-link" to={`${url}/${id}`}>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mb-4">{blurb}</Card.Text>
        </Link>
        <Row>
          <Button className="ml-3 green-btn">Favourite</Button>
          <Link className="card-link ml-auto mr-3" to={`${url}/${id}`}>
            <Button className="ml-auto green-btn">Details</Button>
          </Link>
        </Row>
      </Card.Body>
    </Card>
  );
};
