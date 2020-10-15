import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CardItem } from "../components/card";

export const List = (props: any) => {
  return (
    <div>
      <div className="filter-section"></div>
      <Container>
        <Row>
          {props.mockData.map((val: any) => {
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
