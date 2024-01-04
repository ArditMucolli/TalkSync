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
        className={`bg-blue-500 text-white p-5 rounded-lg ${
          message.senderId === currentUser.uid
            ? "ml-auto w-1/2 rounded-bl-none"
            : "w-1/2 rounded-br-none"
        }`}
      >
        <p className="mb-4 pt-3 pb-3 rounded-t-none rounded-tr-lg rounded-b-lg rounded-l-lg">
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
