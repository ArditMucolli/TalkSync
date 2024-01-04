import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      className={`flex gap-4 mb-20 ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex items-center">
        <img
          className="w-12 h-12 ml-2 rounded-full object-cover sm:w-8 sm:h-8"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div
        className={`text-white p-2 rounded-lg ${
          message.senderId === currentUser.uid
            ? "ml-auto rounded-br-none"
            : "rounded-bl-none"
        } ${message.text.length > 50 ? "w-1/2" : "w-auto"}`}
      >
        <p className=" ml-4 ">{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
