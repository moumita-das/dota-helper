import React, {useState, useEffect} from "react";

const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if(text.trim()=='' || text === undefined) return;
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);
    return () => {
      synth.cancel();
    };
  }, [text]);
  useEffect(()=>{
    if(!utterance) return;
    handlePlay();
  },[utterance])
  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };
};

export default TextToSpeech
