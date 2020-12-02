import { useParams } from "react-router-dom";

export const WithParams = () => {
  let { param1, param2 } = useParams();
  return (
    <>
      <h2>1.{param1}</h2>
      <h2>2.{param2}</h2>
    </>
  );
};
