import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        const messagesData = doc.data().messages;
        setMessages(messagesData);
      }
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  return (
    <div className="messages" style={{ overflowY: "auto" }}>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
      {/* This empty div will be used to scroll to the bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
