import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/WidthParam/123">WidthParam/123</Link>
      </li>
      <li>
        <Link to="/WidthParams/Hello/world">WidthParams/Hello/world</Link>
      </li>
      <li>
        <Link to="/WidthQuery?name=kasper&age=29">WidthQuery</Link>
      </li>
    </ul>
  );
};
