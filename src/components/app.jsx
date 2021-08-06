import React, { Component } from "react";
import NavBar from "./shared/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./shared/about";
import Home from "./shared/home";
import QuestionHeader from "./questions/questionHeader";

import Questions from "./questions/questions";
import Answers from "./questions/answers";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/home" component={Home} />

            <Route path="/questions" component={Questions} />
            <Route path="/answers" component={Answers} />
            <Route path="/about" component={About} />
            <Redirect from="/" to="/home"></Redirect>
          </Switch>
        </main>
        <QuestionHeader/>
      </React.Fragment>
    );git 
  }
}

export default App;
