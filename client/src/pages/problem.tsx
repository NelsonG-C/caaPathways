import React from "react";
import { Jumbotron, Dropdown, Button } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { ErrorPage } from "../pages/error";

type testType = {
  id: number;
  title: string;
  description: string;
};

const mockMajors: testType[] = [
  {
    id: 1,
    title: "Agricultural Science",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
  {
    id: 2,
    title: "Neuroscience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
  {
    id: 3,
    title: "Computer Science",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
  {
    id: 4,
    title: "Biomedicine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias reiciendis eos fugit itaque impedit? Libero maiores est eos, doloremque eveniet enim, ipsum ipsam incidunt illo voluptate soluta sequi quis?",
  },
];

export const Problem = (props: any) => {
  let { problemId }: any = useParams();
  const { data } = props;

  const [result] = data.filter((i: any) => i.id == problemId);

  console.log("Result", result);

  console.log(problemId);
  let match = useRouteMatch();
  console.log("Match.path", match.path);
  if (result == undefined) {
    return <ErrorPage />;
  }
  return (
    <div>
      <div className="back-btn">
        <Button>Back</Button>
      </div>
      <div className="jumbo-shadow">
        <Jumbotron className="jumbotron-major">
          <h1>{result.title}</h1>
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
        <h2 className="major-txt">Relevant Majors</h2>
        {mockMajors.map((data: testType) => {
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
