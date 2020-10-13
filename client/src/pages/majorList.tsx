import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CardItem } from "../components/card";

const mockData: object[] = [
  { data: 1 },
  { data: 2 },
  { data: 3 },
  { data: 1 },
  { data: 2 },
  { data: 3 },
];

export const MajorList = (props: any) => {
  return (
    <div>
      <div className="filter-section"></div>
      <Container>
        <Row>
          {mockData.map(() => {
            return (
              <Col xs={12} md={4} className="card-test">
                <CardItem />
              </Col>
            );
          })}
        </Row>
      </Container>
      <h1>Hello major lis</h1>
    </div>
  );
};
