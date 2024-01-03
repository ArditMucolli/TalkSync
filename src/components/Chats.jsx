import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div className="   p-2 cursor-pointer w-full">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            onClick={() => handleSelect(chat[1].userInfo)}
            key={chat[0]}
            className="flex items-center  hover:bg-slate-700 gap-4 flex-grow p-2"
          >
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div>
              <span className="text-lg sm:text-base font-bold">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-sm">{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
