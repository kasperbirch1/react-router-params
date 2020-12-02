import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { WidthParam } from "./components/WidthParam";
import { WidthParams } from "./components/WidthParams";
import { Nav } from "./components/Nav";

// useQuery hook
// function useQuery() {
//   // return new URLSearchParams(useLocation().search);
//   return new URLSearchParams(window.location.search);
// }
// useQuery hook end

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
          <Route exact path="/WidthQuery">
            <WidthQuery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const WidthQuery = () => {
  const [state, setState] = useState([]);
  // let location = useLocation();

  useEffect(() => {
    setState(window.location.search);
  }, []);

  // let query = useQuery();

  return (
    <>
      <h2>WidthQuery</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <h2>{state.name}</h2>
      <h2>{state.age}</h2>
    </>
  );
};
