import React, { useState, useContext, useEffect } from "react";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="bg-zinc-300 w-3/4 h-screen flex flex-col">
      <div className="bg-white p-3 flex justify-between dark:bg-slate-800">
        <span className="text-2xl font-bold text-black flex ml-3 items-center">
          {data.user?.displayName}
        </span>
        <div className="flex gap-3 mr-3">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <div className="bg-white flex-1 overflow-auto">
        <div className="min-h-[80%]">
          <Messages />
        </div>
      </div>
      <div className=" bg-white">
        <Input />
      </div>
    </div>
  );
};

export default Chat;
