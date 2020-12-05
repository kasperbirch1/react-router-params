import React, { useState, useEffect } from "react";

const Form = () => {
  const [AllInputCheck, setAllInputCheck] = useState(false);
  const [AllInputValues, setAllInputValues] = useState({
    email: "",
    password: "",
    text: "",
  });

  const handleInputChange = (event) => {
    setAllInputValues((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const checkAllValues = (arrayOfValues) => {
    return arrayOfValues.length > 0;
  };

  useEffect(() => {
    const arrayOfValues = Object.values(AllInputValues);
    const disabledBoolean = arrayOfValues.every(checkAllValues);
    setAllInputCheck(disabledBoolean);
  }, [AllInputValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(AllInputValues);
  };

  return (
    <>
      <pre>{JSON.stringify(AllInputCheck, null, 2)}</pre>
      <pre>{JSON.stringify(AllInputValues, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label>text</label>
          <input type="text" name="text" onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label></label>
          <button disabled={AllInputCheck ? false : true} type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
