import React from "react";
import { Switch,Route,BrowserRouter, useHistory } from 'react-router-dom';
import Main from "./components/Main";
import "./App.css";

function App() {
  const history = useHistory();
  return (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
