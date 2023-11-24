import React from "react";
import {useSelector} from 'react-redux'
const ChatBody = () => {
    const messages = useSelector((state) => state.chat.messages)
    console.log(messages)
    return <></>
}

export default ChatBody;