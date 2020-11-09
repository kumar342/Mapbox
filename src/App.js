import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UserList from "./components/UserList";
import Mapbox from "./components/mapbox";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/usersList" component={UserList} />
            <Route exact path="/maps" component={Mapbox} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
