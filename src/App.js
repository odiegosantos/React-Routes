import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Topo from './components/Topo';
import Home from './components/Home';
import Produtos from "./components/Produtos";
import Empresa from "./components/Empresa";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import NotFound from "./components/NotFound";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/produtos" render={() => <Produtos />} />
            <Route exact path="/empresa" render={() => <Empresa />} />
            <Route exact path="/sobre" render={() => <Sobre />} />
            <Route exact path="/contato" render={(props) => <Contato />} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
