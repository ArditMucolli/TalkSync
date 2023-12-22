import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="flex items-start ml-3 mt-5">
      <div className="flex flex-col items-start justify-center text-center">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Find a user"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            className=" py-2 px-4 focus:outline-none  bg-slate-600  border-b-2"
          />
        </div>
        {err && <span>User not found!</span>}
        {user && (
          <div className="flex items-center  hover:bg-slate-700 w-full p-2 rounded-lg cursor-pointer">
            <div className="flex items-center gap-4 flex-grow">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.photoURL}
                alt=""
              />
              <div>
                <span className="text-lg sm:text-base font-bold">
                  {user.displayName}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
