import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export const CardItem = (props: any) => {
  const { id, url, title, blurb } = props;
  console.log("Props here", props);
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
