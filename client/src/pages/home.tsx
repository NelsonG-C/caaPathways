import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export const HomePage = (props: any) => {
  return (
    <div>
      <Jumbotron className="jumbotron-home">
        <h1>PATHWAYS</h1>
        <h2>Take the next step for your career in Cellular Agriculture</h2>
        <div className="j-btn-row">
          <Button className="green-btn">
            <Link className="nav-link" to="/majors">
              Majors <span>&rarr;</span>
            </Link>
          </Button>
          <Button className="green-btn">
            <Link className="nav-link" to="/problems">
              Problems to Solve <span>&rarr;</span>
            </Link>
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
};
