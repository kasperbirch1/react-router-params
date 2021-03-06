import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { WithParam } from "./components/WithParam";
import { WithParams } from "./components/WithParams";
import { Nav } from "./components/Nav";
import { WithQuery } from "./components/WithQuery";
import Form from "./components/Form";
import ReactHookForm from "./components/ReactHookForm";
import UserLogin from "./components/UserLogin";

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
          <Route path="/WithParam/:param">
            <WithParam />
          </Route>
          <Route path="/WithParams/:param1/:param2">
            <WithParams />
          </Route>
          <Route exact path="/WithQuery">
            <WithQuery />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/ReactHookForm">
            <ReactHookForm />
          </Route>
          <Route>
            <UserLogin exact path="/UserLogin" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
