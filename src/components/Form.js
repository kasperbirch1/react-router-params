import React, { useState, useEffect } from "react";

const Form = () => {
  const [AllInputCheck, setAllInputCheck] = useState(false);
  const [AllInputValues, setAllInputValues] = useState({});

  const handleInputChange = (event) => {
    setAllInputValues((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const checkAllValues = (AllInputValues) => {
    const arrayOfValues = Object.values(AllInputValues);
    return arrayOfValues.length > 0;
  };

  useEffect(() => {
    checkAllValues(AllInputValues);
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
