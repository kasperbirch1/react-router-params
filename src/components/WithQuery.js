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
  }, []);

  return (
    <>
      <h2>WithQuery</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <h2>name: {state.name}</h2>
      <h2>age: {state.age}</h2>
    </>
  );
};
