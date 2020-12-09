import { useStateValue } from "../StateProvider";

export const Home = () => {
  const [{ user }] = useStateValue();
  return (
    <>
      <h2>Home</h2>
      <p>Usher info:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};
