import React, { useState, useRef, useEffect } from "react";
import { generateToken, getRandomName, randomId } from "./util";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./App.css";

const App = () => {
  const myMeeting = useRef();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getData = async () => {
      let { token } = await generateToken(randomId(5), "3555", getRandomName());
      setToken(token);
    };

    getData();
  }, []);

  useEffect(() => {
    if (token && myMeeting.current) {
      const inst = ZegoUIKitPrebuilt.create(token);
      inst.joinRoom({
        container: myMeeting.current,
      });
    }
  }, [token, myMeeting.current]);

  return (
    <div>
      <div ref={myMeeting}></div>
    </div>
  );
};

export default App;