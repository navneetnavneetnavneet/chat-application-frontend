import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
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
    console.log(user);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 px-5 py-5 bg-zinc-50 rounded-md">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-5xl font-bold">Edit Profile</h1>
          <p onClick={() => navigate("/")}>(back)</p>
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 mt-5"
        >
          <div>
            <label
              htmlFor="fullname"
              className="text-base font-semibold text-zinc-600"
            >
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 text-base"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="text-base font-semibold text-zinc-600"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="UserName"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 text-base"
            />
          </div>
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
          <div className="flex items-center gap-5">
            <span className="flex gap-1 items-center">
              <input
                value="male"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "male" ? true : false}
                name="gender"
                type="radio"
              />
              <p className="text-base font-semibold text-zinc-600">Male</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                value="female"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "female" ? true : false}
                name="gender"
                type="radio"
              />
              <p className="text-base font-semibold text-zinc-600">Female</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                value="others"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "others" ? true : false}
                name="gender"
                type="radio"
              />
              <p className="text-base font-semibold text-zinc-600">Others</p>
            </span>
          </div>
          <button className="px-2 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-100 text-lg font-semibold text-white">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
