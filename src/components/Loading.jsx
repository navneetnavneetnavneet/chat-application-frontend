import React from "react";
import loading from "/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-[#252220] flex items-center justify-center">
      <img className="h-1/4 object-cover" src={loading} alt="" />
    </div>
  );
};

export default Loading;
