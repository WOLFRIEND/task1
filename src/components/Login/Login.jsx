import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "store/actionCreators/auth";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { clear } from "@testing-library/user-event/dist/clear";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const errMessage = useSelector((state) => state.auth.message);

  const clearForm = useCallback(() => {
    // setForm((provided) => ({ ...provided, password: "" }));
    setForm({ ...form, password: "" });
  }, [form]);

  useEffect(() => {
    if (!errMessage && isLoggedIn) navigate(`/profile`);
    else if (errMessage && !isLoggedIn) clearForm();
  }, [isLoggedIn, errMessage, clearForm]);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(signIn(form));
    },
    [dispatch, form]
  );

  const handleUserInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <React.Fragment>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onInput={handleUserInput}
        />
      </React.Fragment>
      <React.Fragment>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onInput={handleUserInput}
        />
      </React.Fragment>
      <button onClick={handleFormSubmit}>Login</button>
      <p className="form__err-msg">{errMessage}</p>
    </form>
  );
};
