import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
  ];

  useEffect(() => {
    const element = document.documentElement;

    const setThemeClass = (newTheme) => {
      element.classList.remove("dark", "light");
      element.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    setThemeClass(theme);

    setThemeClass(theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

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
    <div className="p-2 cursor-pointer w-full">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            onClick={() => handleSelect(chat[1].userInfo)}
            key={chat[0]}
            className="flex items-center  hover:bg-white dark:hover:bg-slate-700 gap-4 flex-grow p-2"
          >
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div>
              <span className="text-lg sm:text-base font-bold dark:text-gray-300">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-sm dark:text-gray-300">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
      <div className="fixed bottom-5 left-10 duration-100 dark:bg-slate-600 bg-gray-100 rounded">
        {options?.map((opt) => (
          <button
            key={opt.text}
            onClick={() => toggleTheme(opt.text)}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chats;
