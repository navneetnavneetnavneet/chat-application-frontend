import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncEditUser } from "../store/actions/userActions";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const [fullName, setFullName] = useState(user && user.fullName);
  const [username, setUsername] = useState(user && user.username);
  const [email, setEmail] = useState(user && user.email);
  const [profileImage, setProfileImage] = useState();
  const [gender, setGender] = useState(user && user.gender);

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = {
      fullName,
      username,
      email,
      profileImage,
      gender,
    };
    await dispatch(asyncEditUser(user));
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="w-full md:w-1/4 px-5 py-5 bg-zinc-50 rounded-md">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-5xl font-bold">Edit Profile</h1>
          <i
            onClick={() => navigate("/")}
            className="ri-close-fill text-[1.4rem]"
          ></i>
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 mt-5 text-lg md:text-base"
        >
          <div>
            <label htmlFor="fullname" className="font-semibold text-zinc-600">
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
            <label htmlFor="username" className="font-semibold text-zinc-600">
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
            <label htmlFor="email" className="font-semibold text-zinc-600">
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
              htmlFor="profileImage"
              className="font-semibold text-zinc-600"
            >
              Profile Image
            </label>
            <input
              onChange={(e) => setProfileImage(e.target.files[0])}
              type="file"
              placeholder="ProfileImage URL"
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
              <p className="font-semibold text-zinc-600">Male</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                value="female"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "female" ? true : false}
                name="gender"
                type="radio"
              />
              <p className="font-semibold text-zinc-600">Female</p>
            </span>
            <span className="flex gap-1 items-center">
              <input
                value="others"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "others" ? true : false}
                name="gender"
                type="radio"
              />
              <p className="font-semibold text-zinc-600">Others</p>
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
