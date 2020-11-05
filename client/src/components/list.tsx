import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { CardItem } from "../components/card";
import Collapsible from "react-collapsible";

//Types
import { ListProps, MockData } from "../types";

const FilterNames = [
  "Arts",
  "Biology",
  "Science",
  "Software",
  "Journalism",
  "Design",
  "Engineering",
];

export const List = (props: ListProps) => {
  const { url } = props.match;
  return (
    <div>
      <Collapsible open={true} trigger={props.show}>
        <div className="filter-section">
          <Container>
            <Row className="filter-rows">
              <Col xs={12} md={6}>
                <h2 className="filter-heading">Filter by Interest Area</h2>
              </Col>
              <Col xs={12} md={6}>
                {FilterNames.map((data, index) => {
                  return (
                    <Button key={index} className="filter-button">
                      {data}
                    </Button>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </div>
      </Collapsible>
      <Container>
        <Row>
          {props.mockData.map((val: MockData) => {
            console.log(val.id);
            return (
              <Col xs={12} md={4} className="card-test" key={val.id}>
                <CardItem
                  title={val.title}
                  blurb={val.blurb}
                  id={val.id}
                  url={url}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
