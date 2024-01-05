import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg-slate-100 sm:h-16 flex flex-col sm:flex-row items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-full object-cover sm:w-8 sm:h-8"
          src={currentUser.photoURL}
          alt=""
        />
        <span className="text-black font-bold sm:text-base">
          {currentUser.displayName}
        </span>
      </div>
      <button
        onClick={() => {
          signOut(auth);
        }}
        className="bg-slate-50 py-1 px-2 rounded-md shadow-md hover:bg-gray-200 focus:outline-none mt-2 sm:mt-0"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
