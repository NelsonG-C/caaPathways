import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./layout/layout";
import { HomePage } from "./pages/home";
import { MajorListPage } from "./pages/majorList";
import { Major } from "./pages/major";
import { Problem } from "./pages/problem";
import { ProblemListPage } from "./pages/problemList";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/majors">
          <MajorListPage />
        </Route>
        <Route path="/problems">
          <ProblemListPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
