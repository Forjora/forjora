/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "../../styles/chat.css";
import { io } from "socket.io-client";

const ChatLayout = () => {

  const socket = useRef(null);  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const receiveMessage = (message) => {

      console.log("Updating messages state:", message);


      setMessages((prevMessages) => [
          ...prevMessages,
          message
      ]);

  };

  useEffect(() => {

    socket.current = io("https://chat-server-hc54.onrender.com/"); 

    socket.current.on("connect", () => {
      console.log("Connected: ", socket.current.id);
      socket.current.emit("joinRoom", "this");
    });

    socket.current.on("receieveMessage", (data) => {

        const newMessage = {
            id: Date.now(),
            sender: data.username,
            text: data.message,

            type:
                data.senderId === socket.current.id
                    ? "outgoing"
                    : "incoming"
        };
        
        console.log("ADDING TO UI:", newMessage);
        receiveMessage(newMessage);

    });

    return () => {
        socket.current.disconnect();
    };


  }, []);


  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }

    socket.current.emit("sendMessage", {
        username: "You",
        message: message,
        roomId: "this"
    });

    // setMessages((prevMessages) => [...prevMessages, newMessage]);

    setMessage("");
  };

  return (
    <div className="chat-layout">
      <div className="main">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-row ${msg.type}`}>
            <div className="message-bubble">
              {msg.type === "incoming" && (
                <div className="message-sender">{msg.sender}</div>
              )}

              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="textbar">
        <input
          type="text"
          className="text-bar"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatLayout;
