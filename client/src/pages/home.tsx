import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "../styles/styles.css";

export const HomePage = (props: any) => {
  return (
    <div>
      <Jumbotron className="jumbotron-home">
        <h1>Hello, world!</h1>
        <h2>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </h2>
        <div className="j-btn-row">
          <Button variant="primary">Majors</Button>
          <Button variant="primary">Problems to Solve</Button>
        </div>
      </Jumbotron>
    </div>
  );
};
