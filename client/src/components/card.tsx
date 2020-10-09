import React from "react";
import { render } from "@testing-library/react";

export const Card = (props: any) => {
  return <div className="card-container">{props.children}</div>;
};
