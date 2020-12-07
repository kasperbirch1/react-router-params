import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  // make sure to read state before render to subscribe to the state update (Proxy).
  const { dirtyFields } = formState;

  // check your dev console, it's a Set
  console.log("dirtyFields", dirtyFields);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" name="First name" ref={register({ required: true })} />

      <label>Last name</label>
      <input type="text" name="Last name" ref={register({ required: true })} />

      <label>Email</label>
      <input type="text" name="Email" ref={register({ required: true })} />

      <label>Mobile number</label>
      <input
        type="tel"
        name="Mobile number"
        ref={register({ required: true })}
      />

      <label>Title</label>
      <select name="Title" ref={register({ required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <label>Are you a developer?</label>
      <input
        name="developer"
        type="radio"
        value="Yes"
        ref={register({ required: true })}
      />
      <input
        name="developer"
        type="radio"
        value="No"
        ref={register({ required: true })}
      />

      {/* {formState && <pre>{JSON.stringify(formState, null, 2)}</pre>} */}

      <input type="submit" disabled={!formState.isValid} />
    </form>
  );
};

export default ReactHookForm;
