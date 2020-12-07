import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export const Nav = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <ul>
      <li>{user ? "bruger er login" : "ingen bruger"}</li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/WithParam/123">WithParam/123</Link>
      </li>
      <li>
        <Link to="/WithParams/Hello/world">WithParams/Hello/world</Link>
      </li>
      <li>
        <Link to="/WithQuery">WithQuery</Link>
      </li>{" "}
      <li>
        <Link to="/WithQuery?name=kasper&age=29">WithQuery kasper 29 </Link>
      </li>
      <li>
        <Link to="/form">form</Link>
      </li>
      <li>
        <Link to="/ReactHookForm">ReactHookForm</Link>
      </li>
    </ul>
  );
};
