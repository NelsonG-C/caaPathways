import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./layout/layout";
import { HomePage } from "./pages/home";
import { MajorListPage } from "./pages/majorList";
import { Major } from "./pages/major";
import { ProblemListPage } from "./pages/problemList";

function App() {
  return (
    <Layout>
      <HomePage />
      <ProblemListPage />
      <MajorListPage />
      <Major />
    </Layout>
  );
}

export default App;
