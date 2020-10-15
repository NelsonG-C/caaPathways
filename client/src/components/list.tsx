import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { CardItem } from "../components/card";

const FilterNames = [
  "Arts",
  "Biology",
  "Science",
  "Software",
  "Journalism",
  "Design",
  "Engineering",
];

export const List = (props: any) => {
  return (
    <div>
      <div className="filter-section">
        <Container>
          <Row className="filter-rows">
            <Col>
              <h2 className="filter-heading">Filter by Interest Area</h2>
            </Col>
            <Col>
              {FilterNames.map((data, index) => {
                return (
                  <Button key={index} variant="outline-info">
                    {data}
                  </Button>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
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
    </div>
  );
};