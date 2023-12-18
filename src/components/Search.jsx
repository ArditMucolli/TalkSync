import React from "react";

const Search = () => {
  return (
    <div className="flex items-start ml-3 mt-5">
      <div className="flex flex-col items-start justify-center text-center">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Find a user"
            className="border rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center  hover:bg-slate-700 w-full p-2 rounded-lg cursor-pointer">
          <div className="flex items-center gap-4 flex-grow">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://images.pexels.com/photos/19479545/pexels-photo-19479545/free-photo-of-a-woman-in-jeans-and-a-leather-jacket-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
            />
            <div>
              <span className="text-lg sm:text-base font-bold">Ardit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
