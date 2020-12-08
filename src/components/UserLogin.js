import React from "react";
import { useStateValue } from "../StateProvider";

const UserLogin = () => {
  const [{ user }, dispatch] = useStateValue();

  const Login = () => {
    dispatch({
      type: "SET_USER",
      user: true,
    });
  };
  const Logout = () => {
    dispatch({
      type: "REMOVE_USER",
      user: null,
    });
  };

  return (
    <>
      {user ? (
        <button style={{ backgroundColor: "red" }} onClick={Logout}>
          Logout
        </button>
      ) : (
        <button style={{ backgroundColor: "green" }} onClick={Login}>
          login
        </button>
      )}

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default UserLogin;
