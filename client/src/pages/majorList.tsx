import React from "react";
import { List } from "../components/list";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Major } from "./major";

const oldData: any = [
  { id: "001", title: "test Title here" },
  { id: "002", title: "test Teetle here" },
  { id: "003", title: "test Title here" },
  { id: "004", title: "test Title here" },
  { id: "005", title: "test Title here" },
  { id: "006", title: "test Title here" },
  { id: "007", title: "test Title here" },
];

const mockData = [
  {
    id: 1,
    title: "Major 1",
    blurb: "Small blurb here for the card before entering it",
  },
  {
    id: 2,
    title: "Another Major",
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

export const OldListPage = (props: any) => {
  return (
    <div>
      <List mockData={mockData} />
    </div>
  );
};

export const MajorListPage = (props: any) => {
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
                  <h2>Majors</h2>
                </Col>
                <Col>
                  <p className="f-btn"> Explore Majors</p>
                  <Button className="f-btn">Filters &#9776;</Button>
                  <div className="f-btn">
                    <input className="filter-search"></input>
                    <Button>&#10070;</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <List mockData={mockData} match={match} />
        </Route>
        <Route path={`${path}/:majorId`}>
          <Major data={mockData} />
        </Route>
      </div>
    </Switch>
  );
};
