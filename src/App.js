import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Design from "./components/Design";
import Code from "./components/Code";

const App = () => (
  <Fragment>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/code" component={Code} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
