import React from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";



export default function App(props) {
  return (
    <main>
      <Header />
      <CharacterCard/>
      <Route exact path="/"  component={WelcomePage} />
      <Route path="/character/:id"  component={CharacterList} />
    </main>
  );
}
