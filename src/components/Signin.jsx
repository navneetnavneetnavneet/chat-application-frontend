import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncSigninUser } from "../store/actions/userActions";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(asyncSigninUser(user));
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-emerald-300">
      <div className="w-1/4 px-5 py-5 rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center">Sign In</h1>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 my-5"
        >
          <div className="">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="text-base w-full px-4 py-2 mt-1 rounded-md outline-none border border-zinc-400"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="text-base w-full px-4 py-2 mt-1 rounded-md outline-none border border-zinc-400"
            />
          </div>

          <button className="text-base font-semibold text-white w-full px-4 py-2 mt-1 rounded-md bg-blue-600">
            Sign in
          </button>
        </form>
        <span className="w-full  text-sm text-center block">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signin;
