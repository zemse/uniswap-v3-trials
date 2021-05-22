import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./containers/Navbar";
import { Home } from "./containers/Home";
import { Airdrop } from "./containers/Airdrop";
import { Pool } from "./containers/Pool";
import { Calculator } from "./containers/Calculator";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/airdrop" component={Airdrop} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/pool/:addr" component={Pool} exact />
        <Route path="*">
          <p>Looks like something went rong</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
