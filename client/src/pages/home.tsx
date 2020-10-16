import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "../styles/styles.css";

export const HomePage = (props: any) => {
  return (
    <div>
      <Jumbotron className="jumbotron-home">
        <h1>PATHWAYS</h1>
        <h2>Take the next step for your career in Cellular Agriculture.</h2>
        <div className="j-btn-row">
          <Button className="green-btn">
            Majors <span>&rarr;</span>
          </Button>
          <Button className="green-btn">
            Problems to Solve <span>&rarr;</span>
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
};
