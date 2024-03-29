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
      className={`flex gap-4 mb-20 mt-10 ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex flex-col pl-2 pr-2">
        <img
          className="w-12 h-12 rounded-full object-cover sm:w-8 sm:h-8"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <div className="flex flex-col text-center">
          <p className="text-sm font-semibold dark:text-gray-300">
            {message.senderId === currentUser.uid
              ? "Me"
              : data.user.displayName}
          </p>
        </div>
      </div>
      <div
        className={`bg-blue-500 text-white p-2 rounded-lg ${
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
