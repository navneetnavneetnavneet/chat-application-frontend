import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncSignupUser } from "../store/actions/userActions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      fullName,
      username,
      email,
      password,
      gender,
    };
    dispatch(asyncSignupUser(user));
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-emerald-300">
      <div className="w-1/4 px-5 py-5 rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 my-5"
        >
          <div className="">
            <label htmlFor="fullname" className="text-sm">
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              className="text-base w-full px-4 py-2 mt-1 rounded-md outline-none border border-zinc-400"
            />
          </div>
          <div className="">
            <label htmlFor="fullname" className="text-sm">
              Username
            </label>
            <input
              onChange={(e) => setUserame(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
              className="text-base w-full px-4 py-2 mt-1 rounded-md outline-none border border-zinc-400"
            />
          </div>
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
          <div className="flex items-center gap-4">
            <span className="flex gap-1 items-center">
              <input
                onChange={(e) => setGender(e.target.value)}
                value="male"
                checked={gender === "male" ? true : false}
                type="radio"
              />
              <p>Male</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                onChange={(e) => setGender(e.target.value)}
                value="female"
                checked={gender === "female" ? true : false}
                type="radio"
              />
              <p>Female</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                onChange={(e) => setGender(e.target.value)}
                value="others"
                checked={gender === "others" ? true : false}
                type="radio"
              />
              <p>Others</p>
            </span>
          </div>
          <button className="text-base font-semibold text-white w-full px-4 py-2 mt-1 rounded-md bg-blue-600">
            Sign in
          </button>
        </form>
        <span className="w-full text-center text-sm block">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
