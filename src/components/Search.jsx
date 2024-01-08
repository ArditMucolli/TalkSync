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

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className="flex items-start ml-3 mt-5">
      <div className="flex flex-col items-start justify-center text-center">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Find a user..."
            value={username}
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            className=" py-2 px-4 focus:outline-none bg-white dark:bg-slate-700 rounded-lg dark:text-gray-300"
          />
        </div>
        {err && <span>User not found!</span>}
        {user && (
          <div
            onClick={handleSelect}
            className="flex items-center hover:bg-white dark:hover:bg-slate-700 w-full p-2 rounded-lg cursor-pointer"
          >
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
