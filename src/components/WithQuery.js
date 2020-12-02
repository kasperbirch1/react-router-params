import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";

export const WithQuery = () => {
  const [state, setState] = useState({});
  let query = useQuery();

  useEffect(() => {
    setState({
      name: query.get("name"),
      age: query.get("age"),
    });
  }, [query]);

  return (
    <>
      <h2>WithPQuery</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <h2>name: {state.name}</h2>
      <h2>age: {state.age}</h2>
    </>
  );
};
