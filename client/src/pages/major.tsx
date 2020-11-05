import React from "react";
import { Jumbotron, Dropdown, Button } from "react-bootstrap";
import Collapsible from "react-collapsible";

//Types
import { ProblemData } from "../types";

const mockProblems: ProblemData[] = [
  {
    id: 1,
    title: "Bioreactor Processing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
  {
    id: 2,
    title: "Cell Lines",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
  {
    id: 3,
    title: "Cell Culture Media",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
  {
    id: 4,
    title: "Public Perception",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
];

export const Major = () => {
  return (
    <div>
      <div className="back-btn">
        <Button>Back</Button>
      </div>
      <div className="jumbo-shadow">
        <Jumbotron className="jumbotron-major">
          <h1>Major Title</h1>
        </Jumbotron>
      </div>
      <div className="major-txt">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias
          reiciendis eos fugit itaque impedit? Libero maiores est eos,
          doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta
          sequi quis?
        </p>
      </div>
      <div>
        <h2 className="major-txt">Problems To Solve</h2>
        {mockProblems.map((data: ProblemData) => {
          return (
            <Collapsible
              classParentString="pm"
              trigger={data.title}
              key={data.id}
            >
              <p>{data.description}</p>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};
