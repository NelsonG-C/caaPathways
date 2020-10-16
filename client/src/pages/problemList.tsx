import React from "react";
import { List } from "../components/list";
import { Container, Row, Col, Button } from "react-bootstrap";

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

export const ProblemListPage = (props: any) => {
  return (
    <div>
      <div className="problem-list-top">
        <Container>
          <Row className="problem-container">
            <Col md={4}>
              <h2>Problems To Solve</h2>
            </Col>
            <Col>
              <p className="f-btn"> Explore problem areas</p>
              <Button className="f-btn">Filters &#9776;</Button>
              <div className="f-btn">
                <input className="filter-search"></input>
                <Button>&#10070;</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <List mockData={mockData} />
    </div>
  );
};
