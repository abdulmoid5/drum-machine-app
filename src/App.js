import React, { useState } from "react";
import "./App.css";

const drumPads = [
  { id: "Q", name: "Heater 1", src: "/heater-1.wav" },
  { id: "W", name: "Heater 2", src: "/heater-2.wav" },
  { id: "E", name: "Heater 3", src: "/heater-3.wav" },
  { id: "A", name: "Heater 4", src: "/heater-4_1.wav" },
  { id: "S", name: "Clap", src: "/clap.wav" },
  { id: "D", name: "Open-HH", src: "/open-hh.wav" },
  { id: "Z", name: "Kick-n'-Hat", src: "/kick-n-hat.wav" },
  { id: "X", name: "Kick", src: "/kick.wav" },
  { id: "C", name: "Closed-HH", src: "/closed-hh.wav" },
];

const App = () => {
  const [display, setDisplay] = useState("");

  const playSound = (id) => {
    const audioElement = document.getElementById(id);
    audioElement.currentTime = 0;
    audioElement.play();
    setDisplay(id);
  };

  const renderDrumPads = () => {
    return drumPads.map((pad) => (
      <div
        className="drum-pad"
        id={pad.id}
        key={pad.id}
        onClick={() => playSound(pad.id)}
      >
        {pad.id}
        <audio className="clip" id={pad.id} src={pad.src}></audio>
      </div>
    ));
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">{renderDrumPads()}</div>
    </div>
  );
};

export default App;
