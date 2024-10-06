import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncEditUser } from "../store/actions/userActions";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const [fullName, setFullName] = useState(user && user.fullName);
  const [username, setUsername] = useState(user && user.username);
  const [email, setEmail] = useState(user && user.email);
  const [profileImage, setProfileImage] = useState(
    user && user.profileImage?.url
  );
  const [gender, setGender] = useState(user && user.gender);

  const imageRef = useRef(null);

  const imageHandler = () => {
    imageRef.current.click();
  };

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
    <div className="w-full md:w-1/4 md:mx-auto bg-zinc-100 h-screen flex flex-col items-center">
      <div className="w-full h-10 px-4 flex items-center justify-between">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-blue-600"
        >
          <i className="ri-arrow-left-line"></i> <span>Back</span>
        </div>
      </div>
      <div className="my-10 md:my-5">
        <div className="profileImage w-20 h-20 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={profileImage}
            alt=""
          />
        </div>
        <button onClick={imageHandler} className="text-blue-500 capitalize">
          edit picture
        </button>
      </div>
      <div className="px-4 w-full">
        <h3 className="text-xl font-semibold">Edit Account Details</h3>
        <hr className="border border-zinc-600 my-2"></hr>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 font-medium"
        >
          <div>
            <input
              hidden
              onChange={(e) => setProfileImage(e.target.files[0])}
              ref={imageRef}
              type="file"
              placeholder="Image"
            />
          </div>
          <div>
            <label htmlFor="fullname" className="font-semibold text-zinc-600">
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              className="w-full px-2 py-2 bg-transparent rounded-md outline-none border border-zinc-600 text-base"
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
              className="w-full px-2 py-2 bg-transparent rounded-md outline-none border border-zinc-600 text-base"
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
              className="w-full px-2 py-2 bg-transparent rounded-md outline-none border border-zinc-600 text-base"
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
