import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import "./message.css";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div>
        <img
          className="w-12 h-12 rounded-full object-cover sm:w-8 sm:h-8"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span className="text-gray-400">just now</span>
      </div>
      <div className="">
        <p className=" max-w-min bg-white mb-4 pt-3 pb-3 pr-5 pl-5 rounded-t-none rounded-tr-lg rounded-b-lg rounded-l-lg">
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
