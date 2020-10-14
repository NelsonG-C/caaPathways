import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./layout/layout";
import { HomePage } from "./pages/home";
import { MajorList } from "./pages/majorList";
import { Major } from "./pages/major";

function App() {
  return (
    <Layout>
      <Major />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
}

export default App;
