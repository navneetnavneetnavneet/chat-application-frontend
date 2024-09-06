import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncDeleteStatus } from "../../store/actions/statusActions";

const StatusShow = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { allStatus } = useSelector((state) => state.statusReducer);
  const statusUser = allStatus && allStatus.find((s) => s.user?._id === userId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (statusUser) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 30);

      if (progress >= 100) {
        setProgress(0);

        if (currentIndex < statusUser.user.status.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          navigate("/");
        }
      }
      return () => clearInterval(interval);
    } else {
      navigate("/");
    }
  }, [currentIndex, progress, statusUser]);

  const nextStatusHandler = () => {
    setProgress(0);
    if (currentIndex < statusUser.user.status.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/");
    }
  };

  const previousStatusHandler = () => {
    setProgress(0);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      navigate("/");
    }
  };

  const messageHandler = (e) => {
    e.preventDefault();
  };

  // console.log(statusUser.user?.status[currentIndex]._id);

  return (
    statusUser && (
      <div className="w-full h-screen relative">
        <div
          style={{
            background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))`,
          }}
          className="user text-white absolute top-0 left-0 w-full px-4 py-2 border-b border-zinc-600 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={statusUser.user?.profileImage.url}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-[5vw] md:text-[1.2vw] font-semibold md:leading-4 leading-5">
                {statusUser.user?.fullName}
              </h1>
            </div>
          </div>
          {statusUser.user._id === user?._id ? (
            <i
              onClick={() =>
                dispatch(
                  asyncDeleteStatus(statusUser.user?.status[currentIndex]._id)
                )
              }
              className="ri-delete-bin-line z-[10] text-[1.4rem]"
            ></i>
          ) : (
            ""
          )}

          <div className="w-full h-[3px] bg-zinc-600 absolute bottom-0 left-0">
            <div
              style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
              className="h-full rounded-lg bg-white"
            ></div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={statusUser.user.status[currentIndex].image.url}
            alt=""
          />
        </div>
        <div
          onClick={previousStatusHandler}
          className="w-1/2 absolute top-0 left-0 h-full"
        ></div>
        <div
          onClick={nextStatusHandler}
          className="w-1/2 absolute top-0 right-0 h-full"
        ></div>
        <div className="w-full py-2 px-2 absolute bottom-0 left-0">
          <form
            onSubmit={messageHandler}
            className="border-2 border-zinc-100 w-full rounded-full px-2 py-2 flex items-center gap-1"
          >
            <input
              type="text"
              placeholder="message . . ."
              className="w-full px-2 rounded-full outline-none bg-transparent text-white text-xl"
            />
            <button className="px-3 py-2 rounded-full bg-zinc-500 text-white text-xl font-semibold">
              <i className="ri-send-plane-fill"></i>
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default StatusShow;
