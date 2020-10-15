import React from "react";
import { List } from "../components/list";

const mockData: any = [
  { id: "001", title: "test Title here" },
  { id: "002", title: "test Teetle here" },
  { id: "003", title: "test Title here" },
  { id: "004", title: "test Title here" },
  { id: "005", title: "test Title here" },
  { id: "006", title: "test Title here" },
  { id: "007", title: "test Title here" },
];

export const MajorListPage = (props: any) => {
  return (
    <div>
      <List mockData={mockData} />
    </div>
  );
};
