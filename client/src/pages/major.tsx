import React from "react";
import { Jumbotron, Dropdown, Button } from "react-bootstrap";
import logo from "../bg.jpg";

export const Major = (props: any) => {
  return (
    <div>
      <div className="back-btn">
        <Button>Back</Button>
      </div>
      <Jumbotron className="jumbotron-major">
        <h1>Major Title</h1>
      </Jumbotron>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias
          reiciendis eos fugit itaque impedit? Libero maiores est eos,
          doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta
          sequi quis?
        </p>
      </div>
    </div>
  );
};
