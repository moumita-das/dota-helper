import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { Mic, SendHorizontal, MicOff } from "lucide-react";
import TextToSpeech from "../components/TextToSpeech";
import { useSelector } from "react-redux";

const ChatFooter = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [currentMessage, setCurrentMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const confirmAudioBeforeSend = useSelector((state)=> state.controls.confirmBeforeSend)
  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const handleSpeechStart = () => {
    setIsListening(true);
    SpeechRecognition.startListening()
  }
  const handleSpeechStop = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    setCurrentMessage(transcript)
  }
  
  return (
    <div className="chat-footer__wrapper">
      <div className="footer-row">
        <div className="input__wrapper">
          <input
            className="form-control"
            disabled={isListening}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            value={currentMessage}
          />
        </div>
            
        <div className="controls__wrapper">
          {!isListening && <button className="btn btn-default"><Mic onClick={() => {handleSpeechStart()}}/></button>}
          {isListening && <button className="btn btn-default"><MicOff onClick={() => {handleSpeechStop()}}/></button>}
          <button className="btn btn-default"><SendHorizontal /></button>
        </div>
        {confirmAudioBeforeSend && <TextToSpeech text={currentMessage} />}
      </div>
    </div>
  );
};

export default ChatFooter;
