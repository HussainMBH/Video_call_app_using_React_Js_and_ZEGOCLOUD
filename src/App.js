<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import { generateToken, getRandomName, randomId } from "./util";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./App.css";
=======
import React, { useEffect, useRef, useState } from 'react';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { generateToken, getRandomName, randomId } from "./util";
>>>>>>> 9e83a1a (First Commit)

const App = () => {
  const myMeeting = useRef();
  const [token, setToken] = useState("");
<<<<<<< HEAD

  useEffect(() => {
    const getData = async () => {
      let { token } = await generateToken(randomId(5), "3555", getRandomName());
=======
  

  useEffect(() => {
    const getData = async () => {
      const { token } = await generateToken(
        randomId(5), "3555",
        getRandomName()
        );
>>>>>>> 9e83a1a (First Commit)
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