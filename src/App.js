import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductLists";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Modal from "./components/Modal"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={ProductList} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Details" component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}
export default App;

