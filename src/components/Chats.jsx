import React from "react";

const Chats = () => {
  return (
    <div className="   p-2 cursor-pointer w-full">
      <div className="flex items-center  hover:bg-slate-700 gap-4 flex-grow p-2">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.pexels.com/photos/19479545/pexels-photo-19479545/free-photo-of-a-woman-in-jeans-and-a-leather-jacket-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div>
          <span className="text-lg sm:text-base font-bold">Ardit</span>
          <p className="text-sm">Hello!</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
