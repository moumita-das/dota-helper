import React from "react";
import ChatControls from "./ChatControls";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import './Chat.scss'
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="chat__wrapper">
      <ChatHeader />
      <ChatControls />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default Chat;
