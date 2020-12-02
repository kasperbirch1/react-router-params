import { useParams } from "react-router-dom";

export const WithParam = () => {
  let { param } = useParams();
  return <h2>{param}</h2>;
};
