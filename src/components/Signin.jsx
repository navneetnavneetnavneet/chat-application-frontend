import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncSigninUser } from "../store/actions/userActions";

const Signin = () => {
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

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="w-full md:w-1/4 px-5 py-5 bg-zinc-50 rounded-md">
        <h1 className="text-5xl font-bold">Sign In</h1>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 mt-5 text-lg md:text-base"
        >
          <div>
            <label
              htmlFor="email"
              className=" font-semibold text-zinc-600"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 "
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className=" font-semibold text-zinc-600"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 "
            />
          </div>
          <Link to="/forget_password" className="text-blue-600 w-full text-end">
            Forget password?
          </Link>
          <button className="px-2 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-100 text-lg font-semibold text-white">
            Sign In
          </button>
        </form>
        <p className="text-lg md:text-base font-semibold text-zinc-600 text-center w-full mt-5">
          Don't have an account ?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
