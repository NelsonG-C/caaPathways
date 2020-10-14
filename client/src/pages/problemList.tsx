import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardItem } from "../components/card";

const mockData = [
  {
    id: 1,
    title: "Cell Lines",
    blurb: "Small blurb here for the card before entering it",
  },
  {
    id: 2,
    title: "Media",
    blurb: "Small blurb here for the card before entering it",
  },
  {
    id: 3,
    title: "Bioreactors",
    blurb: "Small blurb here for the card before entering it",
  },
  {
    id: 4,
    title: "Marketing",
    blurb: "Small blurb here for the card before entering it",
  },
  {
    id: 5,
    title: "Cell Lines",
    blurb: "Small blurb here for the card before entering it",
  },
];

export const ProblemList = (props: any) => {
  return (
    <div>
      <div className="filter-section"></div>
      <Container>
        <Row>
          {mockData.map((val: any) => {
            return (
              <Col xs={12} md={4} className="card-test" key={val.id}>
                <CardItem title={val.title} blurb={val.blurb} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <h1>Hello major lis</h1>
    </div>
  );
};
