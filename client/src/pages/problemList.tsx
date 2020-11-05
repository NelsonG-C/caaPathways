import React from "react";
import { List } from "../components/list";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouteMatch, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import { Problem } from "./problem";
import { MockData } from "../types";

const mockData: MockData[] = [
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

export const ProblemListPage = () => {
  let { path, url } = useRouteMatch();
  let match = useRouteMatch();
  console.log("path", path);
  console.log("match", match);
  return (
    <Switch>
      <div>
        <Route exact path={path}>
          <div className="problem-list-top">
            <Container>
              <Row className="problem-container">
                <Col md={4}>
                  <h2>Problems To Solve</h2>
                </Col>
                <Col>
                  <p className="f-btn"> Explore problem areas</p>
                  <Button className="f-btn green-btn">Filters &#9776;</Button>
                  <div className="f-btn">
                    <input className="filter-search"></input>
                    <Button className="green-btn">&#10070;</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <List mockData={mockData} match={match} />
        </Route>
        <Route path={`${path}/:problemId`}>
          <Problem mockData={mockData} />
        </Route>
      </div>
    </Switch>
  );
};
