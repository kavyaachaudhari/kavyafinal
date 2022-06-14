import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Homepage />
            {/* <Switch>
              <Route path="/" component={Homepage} />
              <Route path="/Cryptocurrencies" component={Cryptocurrencies} />
            </Switch>
         
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              {/*<Route exact path="/crypto/:coinId">
                <CryptoDetails />
  </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>*/}
          </div>
        </Layout>
      </div>
      <div className="Footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          all rights reserved
        </Typography.Title>
      </div>
    </div>
  );
};

export default App;
