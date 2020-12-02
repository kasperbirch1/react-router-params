import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { WidthParam } from "./components/WidthParam";
import { WidthParams } from "./components/WidthParams";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/WidthParam/:param">
            <WidthParam />
          </Route>
          <Route path="/WidthParams/:param1/:param2">
            <WidthParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
