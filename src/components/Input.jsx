import React from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";

const Input = () => {
  return (
    <div className="flex items-center justify-between h-16 p-11 ">
      <input
        type="text"
        placeholder="Type something..."
        className="w-full outline-none border-0 text-slate-800"
      />
      <div className="flex gap-4 ">
        <img src={Attach} alt="" className="h-8 cursor-pointer" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" className="w-14 h-8 cursor-pointer" />
        </label>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
