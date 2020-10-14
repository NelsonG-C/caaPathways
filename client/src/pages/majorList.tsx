import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CardItem } from "../components/card";

const mockData: any = [
  { id: "001", title: "test Title here" },
  { id: "002", title: "test Title here" },
  { id: "003", title: "test Title here" },
  { id: "004", title: "test Title here" },
  { id: "005", title: "test Title here" },
  { id: "006", title: "test Title here" },
  { id: "007", title: "test Title here" },
];

export const MajorList = (props: any) => {
  return (
    <div>
      <div className="filter-section"></div>
      <Container>
        <Row>
          {mockData.map((val: any) => {
            return (
              <Col xs={12} md={4} className="card-test" key={val.id}>
                <CardItem title={val.title} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <h1>Hello major lis</h1>
    </div>
  );
};
