import { useParams } from "react-router-dom";

export const WidthParam = () => {
  let { param } = useParams();
  return <h2>{param}</h2>;
};
