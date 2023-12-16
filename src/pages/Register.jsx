import React from "react";
import Add from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <form className="space-y-4">
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Display Name"
          />
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label
            htmlFor="file"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={Add} alt="" className="w-6 h-6 " />
            <span>Add an avatar</span>
          </label>
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
            Sign up
          </button>
        </form>
        <p className="mt-4 text-center">You already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
