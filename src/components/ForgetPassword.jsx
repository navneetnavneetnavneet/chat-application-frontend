import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { asyncForgetPassword } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const data = await dispatch(asyncForgetPassword(email));

      navigate(`/users/forget-link/${data.user._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 px-5 py-5 bg-zinc-50 rounded-md">
        <h1 className="text-5xl font-bold">Send Mail</h1>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 mt-5"
        >
          <div>
            <label
              htmlFor="email"
              className="text-base font-semibold text-zinc-600"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 text-base"
            />
          </div>

          <button className="px-2 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-100 text-lg font-semibold text-white">
            Send
          </button>
        </form>
        <p className="text-base font-semibold text-zinc-600 text-center w-full mt-5">
          Already have an account ?{" "}
          <Link to="/signin" className="text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
