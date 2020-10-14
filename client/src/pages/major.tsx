import React from "react";
import { Jumbotron, Dropdown, Button } from "react-bootstrap";
import Collapsible from "react-collapsible";

type testType = {
  id: number;
  title: string;
  description: string;
};

const mockProblems: testType[] = [
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
      <div>
        {mockProblems.map((data: testType) => {
          return (
            <Collapsible trigger={data.title}>
              <p>{data.description}</p>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};
