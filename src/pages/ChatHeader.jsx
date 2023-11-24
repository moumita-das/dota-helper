import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

import { controlsActions } from "../store/controls-slice";

import { ChevronDown, ChevronUp } from "lucide-react";
const ChatHeader = () => {
  const dispatch = useDispatch();
  const isControlVisisble = useSelector((state) => state.controls.isVisible);
  const isconfirmBeforeSend = useSelector(
    (state) => state.controls.confirmBeforeSend
  );
  const controlBtnClicked = () => {
    dispatch(controlsActions.toggleControlsVisbility());
  };
  const audioBtnClicked = (e) => {
    dispatch(controlsActions.toggleConfirmBeforeSend());
  };
  const resultAudioBtnClicked = (e) => {
    dispatch(controlsActions.resultAudio());
  };
  return (
    <div className="chat-header__wrapper">
      <div className="main-row">
        <div className="bot-name">GABEN</div>
        <div className="control">
          {isControlVisisble ? (
            <button
              className="btn btn-default"
              onClick={() => {
                controlBtnClicked();
              }}
            >
              <ChevronUp color="#E84545" strokeWidth={4} />
            </button>
          ) : (
            <button
              className="btn btn-default"
              onClick={() => {
                controlBtnClicked();
              }}
            >
              <ChevronDown color="#E84545" strokeWidth={4} />
            </button>
          )}
        </div>
      </div>
      {isControlVisisble && (
        <div className="control-panel">
          <div className="confirm">
            <p>Confirm Audio before sending?</p>
            <Form.Check
              type="switch"
              id="custom-switch1"
              onClick={(e) => {
                audioBtnClicked(e);
              }}
              value={isconfirmBeforeSend}
            />
          </div>
          <div className="confirm">
            <p>Vocalise Result?</p>
            <Form.Check
              type="switch"
              id="custom-switch2"
              onClick={(e) => {
                resultAudioBtnClicked(e);
              }}
              value={isconfirmBeforeSend}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
