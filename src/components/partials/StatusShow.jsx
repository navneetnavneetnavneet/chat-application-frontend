import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StatusShow = () => {
  const { userId } = useParams();

  const { allStatus } = useSelector((state) => state.statusReducer);
  const statusUser = allStatus && allStatus.find((s) => s.user?._id === userId);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    statusUser && (
      <div className="w-full h-screen relative">
        <div
          style={{
            background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))`,
          }}
          className="user absolute top-0 left-0 w-full px-4 py-2 border-b border-zinc-600 flex items-center gap-2"
        >
          <div className="w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={statusUser.user?.profileImage.url}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-[5vw] md:text-[1.2vw] text-white font-semibold md:leading-4 leading-5">
              {statusUser.user?.fullName}
            </h1>
          </div>
        </div>
        <div className="w-full h-full bg-red-100 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={statusUser.user.status[currentIndex].image.url}
            alt=""
          />
        </div>
        <div className="w-full py-2 px-2 absolute bottom-0 left-0">
          <form className="border-2 border-zinc-100 w-full rounded-full px-2 py-2 flex items-center gap-1">
            <input
              type="text"
              placeholder="message . . ."
              className="w-full px-2 rounded-full outline-none bg-transparent text-white text-xl"
            />
            <button className="px-3 py-2 rounded-full bg-zinc-600 text-white text-xl font-semibold">
              send
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default StatusShow;
