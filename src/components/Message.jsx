import React from "react";
import "./message.css";

const Message = () => {
  return (
    <div className="owner p-5">
      <div>
        <img
          className="w-12 h-12 rounded-full object-cover sm:w-8 sm:h-8"
          src="https://images.pexels.com/photos/19479545/pexels-photo-19479545/free-photo-of-a-woman-in-jeans-and-a-leather-jacket-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span className="text-gray-400">just now</span>
      </div>
      <div className="">
        <p className=" max-w-min bg-white mb-4 pt-3 pb-3 pr-5 pl-5 rounded-t-none rounded-tr-lg rounded-b-lg rounded-l-lg">
          lorem
        </p>
        <img
          className="w-96 h-96"
          src="https://images.pexels.com/photos/19479545/pexels-photo-19479545/free-photo-of-a-woman-in-jeans-and-a-leather-jacket-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
