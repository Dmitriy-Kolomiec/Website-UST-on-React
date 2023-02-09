import React from "react";
import HeaderMain from "./Components/Header/HeaderMain";
import Header from "./Components/Header/HeaderMain";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/nav";
import styles from "./styles/App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <Navigation />
          <HeaderMain />
        </div>
      </header>
      <main>
        <div className="container">
          <Main />
        </div>
      </main>
    </div>
  );
}

export default App;
