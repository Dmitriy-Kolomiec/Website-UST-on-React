import React from "react";
import HeaderMain from "./components/Header/HeaderMain";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/nav";
import { Container } from './components/Container'

import "./styles/App.css";

function App() {
  return (
    <div>
      <header className="header">
        <Container>
          <Navigation />
          <HeaderMain />
        </Container>
      </header>
      <main>
        <Container>
          <Main />
        </Container>
      </main>
    </div>
  );
}

export default App;
