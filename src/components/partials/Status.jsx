import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Status = () => {
  const { allStatus } = useSelector((state) => state.statusReducer);

  console.log(allStatus);

  return (
    allStatus &&
    allStatus.map((status) => (
      <div
        key={status._id}
        className="relative w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] rounded-full flex-shrink-0 border-2 border-zinc-400 p-[1px]"
      >
        <Link
          to={`/status/user/${status.user._id}`}
          className="w-full flex h-full rounded-full overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src={status.user.profileImage.url}
            alt=""
          />
        </Link>
      </div>
    ))
  );
};

export default Status;
