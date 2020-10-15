import React from "react";
import { List } from "../components/list";

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
      <List mockData={mockData} />
    </div>
  );
};
