import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncNewPassword } from "../store/actions/userActions";

const NewPassword = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const changePasswordHandler = (e) => {
    e.preventDefault();
    dispatch(asyncNewPassword(userId, password));
    navigate("/signin");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 px-5 py-5 bg-zinc-50 rounded-md">
        <h1 className="text-5xl font-bold">Change Password</h1>
        <form
          onSubmit={changePasswordHandler}
          className="w-full flex flex-col gap-3 mt-5"
        >
          <div>
            <label
              htmlFor="password"
              className="text-base font-semibold text-zinc-600"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 text-base"
            />
          </div>

          <button
            disabled={password.trim().length > 5 ? false : true}
            className="w-full px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf]  mt-5 text-white/90 font-semibold"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
