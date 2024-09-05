import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncUploadStatus } from "../../store/actions/statusActions";

const StatusUpload = () => {
  const imageRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");

  const imageHandler = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const uploadStatus = {
      image,
    };
    await dispatch(asyncUploadStatus(uploadStatus));
    navigate("/");
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full flex items-center justify-between px-4 py-2">
        <Link to="/" className="text-lg flex items-center gap-1">
          <i className="ri-home-line"></i> Home
        </Link>
        <h1 className="text-lg">Upload Status</h1>
        <Link to="/edit" className="text-lg flex items-center gap-1">
          <i className="ri-pencil-line"></i> Edit
        </Link>
      </div>
      <div className="flex flex-col pt-20 items-center gap-2">
        <div className="image w-[25vw] h-[25vw] rounded-full border-2 border-zinc-800 flex items-center justify-center">
          <i className="text-5xl font-light ri-image-line"></i>
        </div>
        <button onClick={imageHandler} className="text-blue-500 capitalize">
          select picture
        </button>
      </div>
      <form onSubmit={submitHandler} className="w-full px-6 py-3 mt-10">
        <input
          hidden
          onChange={handleImageChange}
          ref={imageRef}
          type="file"
          placeholder="Image"
        />
        <button
          disabled={image == "" ? true : false}
          className={`w-full text-lg mt-2 px-4 py-2 border font-semibold text-white boder-zinc-800 rounded-md ${
            image != "" ? "bg-blue-600" : "bg-blue-600 opacity-30"
          }`}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default StatusUpload;
